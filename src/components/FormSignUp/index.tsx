import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'
import { FormWrapper, FormLink, FormLoading, FormError } from 'components/Form'
import { FieldErrors, signUpValidate } from 'utils/validations'
import { signIn } from 'next-auth/client'
import { useState } from 'react'
import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'
import { useMutation } from '@apollo/client'
import { MUTATION_REGISTER } from 'graphql/mutations/register'
import Link from 'next/link'
import Button from 'components/Button'
import TextField from 'components/TextField'

const FormSignUp = () => {
    const [values, setValues] = useState<UsersPermissionsRegisterInput>({
        username: '',
        email: '',
        password: ''
    })
    const [fieldError, setFieldErrors] = useState<FieldErrors>({})
    const [formError, setFormError] = useState('')
    const [createUser, { error, loading }] = useMutation(MUTATION_REGISTER, {
        onError: (err) => {
            console.log(err)
            setFormError(
                'Graphql message does not return any message'
                // err?.graphQLErrors[0]?.extensions?.exception.data.message[0]
                //     .messages[0].message
            )
        },
        onCompleted: () => {
            !error &&
                signIn('credentials', {
                    email: values.email,
                    password: values.password,
                    callbackUrl: '/'
                })
        }
    })

    const handleInput = (field: string, value: string) => {
        setValues((s) => ({ ...s, [field]: value }))
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()

        const errors = signUpValidate(values)

        if (Object.keys(errors).length) {
            setFieldErrors(errors)
            return
        }

        setFieldErrors({})

        createUser({
            variables: {
                input: { ...values }
            }
        })
    }

    return (
        <FormWrapper>
            {!!formError && <FormError>{formError}</FormError>}
            <form onSubmit={handleSubmit}>
                <TextField
                    name="username"
                    placeholder="Username"
                    type="text"
                    error={fieldError?.username}
                    icon={<AccountCircle />}
                    onInputChange={(v) => handleInput('username', v)}
                />
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
                <TextField
                    name="confirm_password"
                    placeholder="Confirm password"
                    type="password"
                    error={fieldError?.confirm_password}
                    icon={<Lock />}
                    onInputChange={(v) => handleInput('confirm_password', v)}
                />
                <Button type="submit" size="large" fullWidth>
                    {loading ? <FormLoading /> : <span>Sign up now</span>}
                </Button>
                <FormLink>
                    Already have an account?{' '}
                    <Link href="/sign-in">
                        <a>Sign in</a>
                    </Link>
                </FormLink>
            </form>
        </FormWrapper>
    )
}

export default FormSignUp
