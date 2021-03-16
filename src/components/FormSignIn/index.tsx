import { signIn } from 'next-auth/client'
import { useRouter } from 'next/router'
import { Email, Lock, ErrorOutline } from '@styled-icons/material-outlined'
import { FieldErrors, signInValidate } from 'utils/validations'
import { FormWrapper, FormLink, FormLoading, FormError } from 'components/Form'
import React, { useState } from 'react'
import Button from 'components/Button'
import Link from 'next/link'
import TextField from 'components/TextField'

import * as S from './styles'

const FormSignIn = () => {
    const [values, setValues] = useState({ email: '', password: '' })
    const [loading, setLoading] = useState(false)
    const [fieldError, setFieldErrors] = useState<FieldErrors>({})
    const [formError, setFormError] = useState('')
    const routes = useRouter()
    const { push, query } = routes

    const handleInput = (field: string, value: string) => {
        setValues((s) => ({ ...s, [field]: value }))
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        setLoading(true)

        const errors = signInValidate(values)

        if (Object.keys(errors).length) {
            setFieldErrors(errors)
            setLoading(false)
            return
        }

        setFieldErrors({})

        const result = await signIn('credentials', {
            ...values,
            redirect: false,
            callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`
        })

        if (result?.url) {
            return push(result?.url)
        }

        setLoading(false)
        setFormError('username or password is invalid')
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
                    name="email"
                    placeholder="Email"
                    type="email"
                    error={fieldError?.email}
                    icon={<Email />}
                    onInputChange={(v) => handleInput('email', v)}
                />
                <TextField
                    name="password"
                    placeholder="Password"
                    type="password"
                    error={fieldError?.password}
                    icon={<Lock />}
                    onInputChange={(v) => handleInput('password', v)}
                />
                <S.ForgotPassword href="#">
                    Forgot your password?
                </S.ForgotPassword>
                <Button type="submit" size="large" fullWidth disabled={loading}>
                    {loading ? <FormLoading /> : <span>Sign in now</span>}
                </Button>
                <FormLink>
                    Do not have an account?{' '}
                    <Link href="/sign-up">
                        <a>Sign up</a>
                    </Link>
                </FormLink>
            </form>
        </FormWrapper>
    )
}

export default FormSignIn
