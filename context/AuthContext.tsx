'use client';

// context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import User from "../model/UserModel";


interface AuthContextType {
  authUser: null | User;
  setAuthUser: React.Dispatch<React.SetStateAction<null | User>>;
  authLoading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children } : {children : React.ReactNode}) {
    const [authUser, setAuthUser] = useState<User | null>(null);
    const [authLoading, setAuthLoading] = useState(true);

    useEffect(() => {
        makeAuth().then(() => {});
    }, []);

    const makeAuth = async () => {
        try {
            setAuthLoading(true);
            setAuthUser(new User(
                1,
                'Moulay',
                'Bouabdelli',
                'moulay.bouabdelli@ensia.edu.dz',
                'Tiaret-Algeria',
                '2027',
                'National higher school of artificial intelligence',
                'ENSIA'
            ));

        }catch(err){
            console.log(err);
        }finally {
            setAuthLoading(false);
        }
    }

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser, authLoading }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === null) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
