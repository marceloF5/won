import { ApolloClient, HttpLink, NormalizedCacheObject } from '@apollo/client'
import { useMemo } from 'react'
import apolloCache from './apolloCache'

let apolloClient: ApolloClient<NormalizedCacheObject | null>

function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined', // true
        link: new HttpLink({
            uri: 'http://localhost:1337/graphql'
        }),
        cache: apolloCache
    })
}

export function initializeApollo(initialState = null) {
    // verify if there is an apolloCliente instance. If there is no instance, it will create a new one.
    const apolloClientGlobal = apolloClient ?? createApolloClient()

    // verify if there is data in cache
    if (initialState) {
        apolloClientGlobal.cache.restore(initialState)
    }

    // it's always run in SSR if new cache
    if (typeof window === 'undefined') return apolloClientGlobal

    apolloClient = apolloClient ?? apolloClientGlobal

    return apolloClient
}

export function useApollo(initialState = null) {
    const store = useMemo(() => initializeApollo(initialState), [initialState])

    return store
}
