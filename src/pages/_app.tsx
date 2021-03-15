import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'styled-components'
import { CartProvider } from 'hooks/useCart'
import { Provider as AuthProvider } from 'next-auth/client'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { useApollo } from 'utils/apollo'

function App({ Component, pageProps }: AppProps) {
    const client = useApollo(pageProps.initialApolloState)
    return (
        <AuthProvider session={pageProps.session}>
            <ApolloProvider client={client}>
                <ThemeProvider theme={theme}>
                    <CartProvider>
                        <Head>
                            <title>Won Games</title>
                            <link
                                rel="shortcut icon"
                                href="/img/icon-512.png"
                            />
                            <link
                                rel="apple-touch-icon"
                                href="/img/icon-512.png"
                            />
                            <link rel="manifest" href="/manifest.json" />
                            <meta
                                name="description"
                                content="The best Game Stores in the world"
                            />
                        </Head>
                        <GlobalStyles />
                        <NextNProgress
                            color="#f231a5"
                            startPosition={0.3}
                            stopDelayMs={200}
                            height={3}
                        />
                        <Component {...pageProps} />
                    </CartProvider>
                </ThemeProvider>
            </ApolloProvider>
        </AuthProvider>
    )
}

export default App
