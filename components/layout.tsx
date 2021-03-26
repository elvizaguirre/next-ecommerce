import Head from "next/head";
import React from "react";
import Footer from "./footer";
import { Header } from "./header";


export default function Layout( { children, ...props } ) {
    
    return (<>
    <Head>
        <title>{ props.title? props.title : "Next App TEST"}</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header {...props}/>
    {children}
    <Footer />
    </>);
}