// src/pages/_app.tsx

import type { AppProps } from 'next/app';
import '@/app/globals.css'; // Adjust the path according to your project structure

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
