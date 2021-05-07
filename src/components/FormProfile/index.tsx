import Link from 'next/link'
import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import React from 'react'

import * as S from './styles'

export type FormProfileProps = {
    username?: string
    email?: string
}

const FormProfile = ({ username, email }: FormProfileProps) => {
    return (
        <>
            <Heading lineBottom color="black" size="small">
                My Profile
            </Heading>

            <S.Form>
                <TextField
                    name="name"
                    placeholder="Username"
                    label="Username"
                    initialValue={username}
                />
                <TextField
                    name="email"
                    type="email"
                    placeholder="Email"
                    label="E-mail"
                    initialValue={email}
                />
                <S.ButtonContainer>
                    <Link href={`/forgot-password?email=${email}`} passHref>
                        <Button minimal size="medium" as="a">
                            Reset Password
                        </Button>
                    </Link>
                    <Button>Save</Button>
                </S.ButtonContainer>
            </S.Form>
        </>
    )
}

export default FormProfile
