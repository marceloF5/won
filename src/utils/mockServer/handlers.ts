import { rest } from 'msw'

type LoginReqBody = {
    email: string
}

type ResetReqBody = {
    password: string
    passwordConfirmation: string
    code: string
}

export const handlers = [
    rest.post<LoginReqBody>(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`,
        (req, res, ctx) => {
            const { email } = req.body

            // when there is error
            if (email === 'false@email.com') {
                return res(
                    ctx.status(400),
                    ctx.json({
                        error: 'Bad Request',
                        message: [
                            {
                                messages: [
                                    {
                                        message: 'This email does not exist'
                                    }
                                ]
                            }
                        ]
                    })
                )
            }

            // when there is success
            return res(
                ctx.status(200),
                ctx.json({
                    ok: true
                })
            )
        }
    ),

    rest.post<ResetReqBody>(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`,
        (req, res, ctx) => {
            const { code } = req.body

            // when there is error
            if (code === '12345') {
                return res(
                    ctx.status(400),
                    ctx.json({
                        error: 'Bad Request',
                        message: [
                            {
                                messages: [
                                    {
                                        message: 'Incorrect code provided'
                                    }
                                ]
                            }
                        ]
                    })
                )
            }

            // when there is success
            return res(
                ctx.status(200),
                ctx.json({
                    user: { email: 'valid@email.com' }
                })
            )
        }
    )
]
