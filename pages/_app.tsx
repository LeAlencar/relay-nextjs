import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactRelayContainer } from '../lib/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <ReactRelayContainer Component={Component} props={pageProps} />
}

export default MyApp
