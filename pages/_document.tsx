import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang='pt-br' translate='no'>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />

                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />



                </Head>
                <body>

                    <Main />


                    <NextScript />
                </body>
            </Html>
        );
    }
}

