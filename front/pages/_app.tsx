import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {RealtorsProvider} from '../context/realtors-context';

function MyApp({Component, pageProps}: AppProps) {
  return (<RealtorsProvider>
    <Component {...pageProps} />
  </RealtorsProvider>)
}

export default MyApp
