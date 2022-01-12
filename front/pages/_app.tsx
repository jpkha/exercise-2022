import '../styles/globals.css'
import type {AppProps} from 'next/app'
import App from 'next/app';
import {REALTORS_API} from '../services/constants';
import {Realtor} from '../model/realtor';
import {SelectRealtors} from '../components/common/SelectRealtors';

interface CustomAppProps extends AppProps {
  realtors: Realtor[];
}

function MyApp({Component, pageProps, realtors}: CustomAppProps) {
  return (<>
    <SelectRealtors realtors={realtors}/>
    <Component {...pageProps} />
  </>)
}

MyApp.getInitialProps = async function (appContext) {
  const appProps = await App.getInitialProps(appContext);
  const res = await fetch(REALTORS_API);
  const realtors = await res.json();
  return {
    ...appProps,
    realtors
  }
}
export default MyApp
