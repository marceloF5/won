import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'

import * as S from './styles'

const FormProfile = () => (
    <>
        <Heading lineBottom color="black" size="small">
            My Profile
        </Heading>

        <S.Form>
            <TextField
                name="name"
                placeholder="Name"
                label="Name"
                initialValue="John Doe"
            />
            <TextField
                name="email"
                type="email"
                placeholder="Email"
                label="E-mail"
                initialValue="john.doe@gmail.com"
            />
            <TextField
                name="password"
                type="password"
                placeholder="Type your password"
                label="Password"
            />
            <TextField
                name="new_password"
                type="new_password"
                placeholder="New password"
                label="New Password"
            />
            <Button>Save</Button>
        </S.Form>
    </>
)

export default FormProfile
