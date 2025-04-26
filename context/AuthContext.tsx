'use client';

// context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

class User {
    id: number;

    constructor(id: number) {
        this.id = id;
    }
}

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
            setUser(new User(1));

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
