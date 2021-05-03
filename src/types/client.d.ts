import { GenericObject, SessionBase } from 'next-auth/_utils'

type Session = SessionBase & GenericObject & { jwt: string }

declare function session(
    context?: NextContext & {
        triggerEvent?: boolean
    }
): Promise<Session | null>
declare const getSession: typeof session

export { getSession, Session }
