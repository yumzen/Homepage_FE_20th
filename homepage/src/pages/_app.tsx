import { AppProps } from 'next/app';
import '../app/globals.css'; 
import Script from "next/script"
import RootLayout from '@/app/layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
        <Head>
        {/*<link rel="icon" href="/assets/images/layout/favicon.png" />
        <title>Kahlua Band</title>*/}
        <Script src="https://code.jquery.com/jquery-1.12.4.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></Script>
        </Head>
            <RootLayout>
                <Component {...pageProps} />
            </RootLayout>
        </>
    );
}

export default MyApp;