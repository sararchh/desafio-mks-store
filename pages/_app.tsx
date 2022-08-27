import React from 'react';
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import { GlobalStyles } from "../styles/GlobalStyle";

import { store } from '../src/redux/store';


const persistor = persistStore(store);


function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyles />
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Component {...pageProps} />
                </PersistGate>
            </Provider>
        </>
    )
}

export default MyApp