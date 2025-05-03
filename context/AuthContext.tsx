'use client';

// context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import User from "../model/UserModel";


interface AuthContextType {
  user: null | User;
  setUser: React.Dispatch<React.SetStateAction<null | User>>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children } : {children : React.ReactNode}) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        makeAuth().then(() => {});
    }, []);

    const makeAuth = async () => {
        try {
            setLoading(true);
            setUser(new User(
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
            setLoading(false);
        }
    }

    return (
        <AuthContext.Provider value={{ user, setUser, loading }}>
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
