import { useRouter } from 'next/router'
import {
    CheckCircleOutline,
    Email,
    ErrorOutline
} from '@styled-icons/material-outlined'
import { FieldErrors } from 'utils/validations'
import {
    FormWrapper,
    FormError,
    FormLoading,
    FormSuccess
} from 'components/Form'
import React, { useState } from 'react'
import Button from 'components/Button'
import TextField from 'components/TextField'
import { forgotValidate } from '../../utils/validations'

const FormForgotPassword = () => {
    const { query } = useRouter()
    const [values, setValues] = useState({
        email: (query.email as string) || ''
    })
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [fieldError, setFieldErrors] = useState<FieldErrors>({})
    const [formError, setFormError] = useState('')

    const handleInput = (field: string, value: string) => {
        setValues((s) => ({ ...s, [field]: value }))
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        setLoading(true)

        const errors = forgotValidate(values)

        if (Object.keys(errors).length) {
            setFieldErrors(errors)
            setLoading(false)
            return
        }

        setFieldErrors({})

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`,
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(values)
            }
        )

        const data = await response.json()
        setLoading(false)

        if (data.error) {
            setFormError(data.message[0].messages[0].message)
        } else {
            setSuccess(true)
        }
    }

    return (
        <FormWrapper>
            {success ? (
                <FormSuccess>
                    <CheckCircleOutline />
                    You just received an email!
                </FormSuccess>
            ) : (
                <>
                    {!!formError && (
                        <FormError>
                            <ErrorOutline size={10} />
                            {formError}
                        </FormError>
                    )}
                    <form onSubmit={handleSubmit}>
                        <TextField
                            name="email"
                            placeholder="Email"
                            type="text"
                            error={fieldError?.email}
                            icon={<Email />}
                            initialValue={query.email as string}
                            onInputChange={(v) => handleInput('email', v)}
                        />

                        <Button
                            type="submit"
                            size="large"
                            fullWidth
                            disabled={loading}
                        >
                            {loading ? (
                                <FormLoading />
                            ) : (
                                <span>Send email</span>
                            )}
                        </Button>
                    </form>
                </>
            )}
        </FormWrapper>
    )
}

export default FormForgotPassword
