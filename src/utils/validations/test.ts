import {
    signInValidate,
    signUpValidate,
    forgotValidate,
    resetValidate
} from '.'

describe('Validations Fields', () => {
    describe('signInValidate', () => {
        it('should validate empty fields', () => {
            const values = { email: '', password: '' }

            expect(signInValidate(values)).toMatchObject({
                email: '"email" is not allowed to be empty',
                password: '"password" is not allowed to be empty'
            })
        })

        it('should return if invalid email error', () => {
            const values = { email: 'invalid-email-format', password: '1234' }

            expect(signInValidate(values).email).toMatchInlineSnapshot(
                `"\\"email\\" must be a valid email"`
            )
        })
    })

    describe('signUpValidate', () => {
        it('should validate empty fields', () => {
            const values = { username: '', email: '', password: '' }

            expect(signUpValidate(values)).toMatchObject({
                username: expect.any(String),
                email: expect.any(String),
                password: expect.any(String),
                confirm_password: expect.any(String)
            })
        })

        it('should return short username error', () => {
            const values = {
                username: 'te',
                email: 'test@test.com',
                password: '123456'
            }

            expect(signUpValidate(values).username).toMatchInlineSnapshot(
                `"\\"username\\" length must be at least 5 characters long"`
            )
        })

        it('should return if invalid email error', () => {
            const values = {
                username: 'test test',
                email: 'invalid-email-format',
                password: '1234'
            }

            expect(signUpValidate(values).email).toMatchInlineSnapshot(
                `"\\"email\\" must be a valid email"`
            )
        })

        it('should return if password does not match with confirm password', () => {
            const values = {
                username: 'test test',
                email: 'test@test.com',
                password: '123456',
                confirm_password: '123'
            }

            expect(
                signUpValidate(values).confirm_password
            ).toMatchInlineSnapshot(
                `"Confirm password does not match with password"`
            )
        })
    })

    describe('forgotValidate', () => {
        it('should validate empty fields', () => {
            const values = { email: '' }

            expect(forgotValidate(values)).toMatchObject({
                email: '"email" is not allowed to be empty'
            })
        })

        it('should return if invalid email error', () => {
            const values = { email: 'invalid-email-format' }

            expect(forgotValidate(values).email).toMatchInlineSnapshot(
                `"\\"email\\" must be a valid email"`
            )
        })
    })

    describe('resetValidate', () => {
        it('should validate empty fields', () => {
            const values = { password: '', confirm_password: '' }

            expect(resetValidate(values)).toMatchObject({
                password: expect.any(String)
            })
        })

        it('should validate empty confirm password field when empty', () => {
            const values = { password: '123', confirm_password: '' }

            expect(
                resetValidate(values).confirm_password
            ).toMatchInlineSnapshot(
                `"\\"confirm_password\\" is not allowed to be empty"`
            )
        })

        it('should validate empty confirm password field', () => {
            const values = { password: '123', confirm_password: '23' }

            expect(
                resetValidate(values).confirm_password
            ).toMatchInlineSnapshot(
                `"Confirm password does not match with password"`
            )
        })
    })
})
