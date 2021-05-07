import { useRouter } from 'next/router'
import { Lock, ErrorOutline } from '@styled-icons/material-outlined'
import { FieldErrors, resetValidate } from 'utils/validations'
import { FormWrapper, FormError, FormLoading } from 'components/Form'
import React, { useState } from 'react'
import Button from 'components/Button'
import TextField from 'components/TextField'
import { signIn } from 'next-auth/client'

const FormResetPassword = () => {
    const [values, setValues] = useState({ password: '', confirm_password: '' })
    const [loading, setLoading] = useState(false)
    const [fieldError, setFieldErrors] = useState<FieldErrors>({})
    const [formError, setFormError] = useState('')
    const { query } = useRouter()

    const handleInput = (field: string, value: string) => {
        setValues((s) => ({ ...s, [field]: value }))
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        setLoading(true)

        const errors = resetValidate(values)

        if (Object.keys(errors).length) {
            setFieldErrors(errors)
            setLoading(false)
            return
        }

        setFieldErrors({})

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`,
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    password: values.password,
                    passwordConfirmation: values.confirm_password,
                    code: query.code
                })
            }
        )

        const data = await response.json()

        if (data.error) {
            setFormError(data.message[0].messages[0].message)
            setLoading(false)
        } else {
            signIn('credentials', {
                email: data.user.email,
                password: values.password,
                callbackUrl: '/'
            })
        }
    }

    return (
        <FormWrapper>
            {!!formError && (
                <FormError>
                    <ErrorOutline size={10} />
                    {formError}
                </FormError>
            )}
            <form onSubmit={handleSubmit}>
                <TextField
                    name="password"
                    placeholder="Password"
                    type="password"
                    error={fieldError?.password}
                    icon={<Lock />}
                    onInputChange={(v) => handleInput('password', v)}
                />
                <TextField
                    name="password"
                    placeholder="Confirm Password"
                    type="password"
                    error={fieldError?.confirm_password}
                    icon={<Lock />}
                    onInputChange={(v) => handleInput('confirm_password', v)}
                />

                <Button type="submit" size="large" fullWidth disabled={loading}>
                    {loading ? <FormLoading /> : <span>Reset password</span>}
                </Button>
            </form>
        </FormWrapper>
    )
}

export default FormResetPassword
