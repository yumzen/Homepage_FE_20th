import { AppProps } from 'next/app';
import '../app/globals.css'; 
import RootLayout from '@/app/layout';

function MyApp({ Component, pageProps }: AppProps) {
    const showNavbarAndFooter = !pageProps.noNavbarAndFooter;
    return (
        <>
            {showNavbarAndFooter && <RootLayout>
                <Component {...pageProps} />
            </RootLayout>}
            {!showNavbarAndFooter && <Component {...pageProps} />}
        </>
    );
}

export default MyApp;