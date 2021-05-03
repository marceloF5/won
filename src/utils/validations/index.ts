import Joi from 'joi'
import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'

type ResetValidateParams = { confirm_password: string } & Pick<
    UsersPermissionsRegisterInput,
    'password'
>

export type FieldErrors = {
    [key: string]: string
}

const fieldsValidations = {
    username: Joi.string().min(5).required(),
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required(),
    password: Joi.string().required(),
    confirm_password: Joi.string()
        .valid(Joi.ref('password'))
        .required()
        .messages({
            'any.only': 'Confirm password does not match with password'
        })
}

function getFieldErrors(objErrors: Joi.ValidationResult) {
    const errors: FieldErrors = {}

    if (objErrors.error) {
        objErrors.error.details.forEach((err) => {
            errors[err.path.join('.')] = err.message
        })
    }

    return errors
}

export function signInValidate(
    values: Omit<UsersPermissionsRegisterInput, 'username'>
) {
    const { email, password } = fieldsValidations
    const schema = Joi.object({ email, password })

    return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

export function signUpValidate(values: UsersPermissionsRegisterInput) {
    const schema = Joi.object(fieldsValidations)

    return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

export function forgotValidate(
    values: Pick<UsersPermissionsRegisterInput, 'email'>
) {
    const { email } = fieldsValidations
    const schema = Joi.object({ email })

    return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

export function resetValidate(values: ResetValidateParams) {
    const { password, confirm_password } = fieldsValidations
    const schema = Joi.object({ password, confirm_password })

    return getFieldErrors(schema.validate(values, { abortEarly: false }))
}
