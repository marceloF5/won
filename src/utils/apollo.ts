import { ApolloClient, HttpLink, NormalizedCacheObject } from '@apollo/client'
import { useMemo } from 'react'
import apolloCache from './apolloCache'
import { setContext } from '@apollo/client/link/context'
import { Session } from 'next-auth/client'

let apolloClient: ApolloClient<NormalizedCacheObject | null>

function createApolloClient(session?: Session | null) {
    const httpLink = new HttpLink({
        uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`
    })

    const authLink = setContext((_, { headers }) => {
        const authorization = session?.jwt ? `Bearer ${session.jwt}` : ''

        return { headers: { ...headers, authorization } }
    })

    return new ApolloClient({
        ssrMode: typeof window === 'undefined', // true
        link: authLink.concat(httpLink),
        cache: apolloCache
    })
}

export function initializeApollo(
    initialState = null,
    session?: Session | null
) {
    // verify if there is an apolloCliente instance. If there is no instance, it will create a new one.
    const apolloClientGlobal = apolloClient ?? createApolloClient(session)

    // verify if there is data in cache
    if (initialState) {
        apolloClientGlobal.cache.restore(initialState)
    }

    // it's always run in SSR if new cache
    if (typeof window === 'undefined') return apolloClientGlobal

    apolloClient = apolloClient ?? apolloClientGlobal

    return apolloClient
}

export function useApollo(initialState = null, session?: Session | null) {
    const store = useMemo(() => initializeApollo(initialState, session), [
        initialState,
        session
    ])

    return store
}
