import { useRouter } from 'next/router'
import { Session } from 'next-auth/client'
import { useEffect, useState } from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { StripeCardElementChangeEvent } from '@stripe/stripe-js'
import { ErrorOutline, ShoppingCart } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import Heading from 'components/Heading'
import { FormLoading } from 'components/Form'
import { useCart } from 'hooks/useCart'
import { createPaymentIntent } from 'utils/stripe/methods'
import * as S from './styles'

type FormPaymentProps = {
    session: Session
}

const FormPayment = ({ session }: FormPaymentProps) => {
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState('')
    const [freeGames, setFreeGames] = useState(false)
    const { items } = useCart()
    const stripe = useStripe()
    const elements = useElements()
    const { push } = useRouter()

    useEffect(() => {
        async function setPaymentMode() {
            if (items.length) {
                const data = await createPaymentIntent({
                    items,
                    token: session.jwt
                })

                if (data.freeGames) {
                    setFreeGames(true)
                    return
                }

                if (data.error) {
                    setError(data.error)
                    return
                }

                setClientSecret(data.client_secret)
                setFreeGames(false)
            }
        }

        setPaymentMode()
    }, [items, session])

    const handleChange = async (ev: StripeCardElementChangeEvent) => {
        setDisabled(ev.empty)
        setError(ev.error ? ev.error.message : '')
    }

    const handleSubmit = async (ev: React.FormEvent) => {
        ev.preventDefault()
        setLoading(true)

        if (freeGames) {
            push('/success')
            return
        }

        const payload = await stripe!.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements!.getElement(CardElement)
            }
        })
        if (payload.error) {
            setError(`Payment failed ${payload.error.message}`)
            setLoading(false)
        } else {
            setError(null)
            setLoading(false)

            push('/success')
        }
    }

    return (
        <S.Wrapper>
            <form onSubmit={handleSubmit}>
                <S.Body>
                    <Heading color="black" lineBottom size="small">
                        Payment
                    </Heading>

                    {freeGames ? (
                        <S.FreeGames>
                            Only free games, click buy and enjoy!
                        </S.FreeGames>
                    ) : (
                        <CardElement
                            options={{
                                hidePostalCode: true,
                                style: { base: { fontSize: '16px' } }
                            }}
                            onChange={handleChange}
                        />
                    )}

                    {error && (
                        <S.Error>
                            <ErrorOutline size={20} />
                            {error}
                        </S.Error>
                    )}
                </S.Body>
                <S.Footer>
                    <Button as="a" fullWidth minimal>
                        Continue shopping
                    </Button>
                    <Button
                        fullWidth
                        icon={loading ? <FormLoading /> : <ShoppingCart />}
                        disabled={!freeGames && (disabled || !!error)}
                    >
                        {!loading && <span>Buy now</span>}
                    </Button>
                </S.Footer>
            </form>
        </S.Wrapper>
    )
}

export default FormPayment
