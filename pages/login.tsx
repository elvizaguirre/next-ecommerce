import Layout from "../components/layout";
import React, { useContext, createContext, useState } from "react";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/client';



export default function Login(from) {
    const router = useRouter();
    const [ session, loading ] = useSession();
    return (
    <>
        <Layout noNav >
        <form method="POST" action="/" onSubmit={(evt)=>{
            if (evt.currentTarget.checkValidity()) {
                const email = evt.currentTarget.elements['email'].value;
                const password = evt.currentTarget.elements['password'].value;
                
                if (!confirm('envia a server ' + email + ' ' + password)) {
                    evt.preventDefault();
                    evt.stopPropagation();
                    return;
                }
                signIn();
            }
        }}>
           <input type='email' name='email' required/>
           <input type='password' name='password' required minLength={8} />
           <button type='submit' className="btn btn-primary">Login</button>
        </form>
        </Layout>
    </>
    );
}