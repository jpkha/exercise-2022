import '../styles/globals.css'
import type {AppProps} from 'next/app'
import App from 'next/app';
import {REALTORS_API} from '../services/constants';
import {Realtor} from '../model/api/realtor';
import {HeaderApp} from '../components/header/HeaderApp';
import MessageListLayout from '../components/MessageListLayout';
import {ContentContainer} from '../components/common/ContentContainer';
import {AppContainer} from '../components/common/AppContainer';
import 'moment/locale/fr';
import moment from 'moment';

interface CustomAppProps extends AppProps {
  realtors: Realtor[];
}
'MM/DD/YY, h:mm'

function MyApp({Component, pageProps, realtors}: CustomAppProps) {
  moment.locale('fr');
  return <AppContainer>
    <HeaderApp realtors={realtors}/>
    <ContentContainer>
      <MessageListLayout {...pageProps}/>
      <Component {...pageProps} />
    </ContentContainer>
  </AppContainer>
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
