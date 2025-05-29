'use client'

import User from "../model/UserModel";
import {createContext, useContext, useEffect, useState} from "react";



interface UserContextType {
  user : User | null;
  loading : boolean;
}

const users : User[] = [
    new User(1,
        'Moulay',
        'Bouabdelli',
        'moulay.bouabdelli@ensia.edu.dz',
        'Tiaret-Algeria',
        '2027',
        'National higher school of artificial intelligence',
        'ENSIA'
    ),
    new User(2,
        'Mohammed',
        'Bouabdelli',
        'moulay.bouabdelli@ensia.edu.dz',
        'Tiaret-Algeria',
        '2027',
        'National higher school of artificial intelligence',
        'ENSIA'
    ),
    new User(3,
        'Ilyes',
        'Bouabdelli',
        'moulay.bouabdelli@ensia.edu.dz',
        'Tiaret-Algeria',
        '2027',
        'National higher school of artificial intelligence',
        'ENSIA'
    ),
]

const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children , userId} : {children : React.ReactNode; userId: number}) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUser().then(() => {})
    }, [userId])


    const getUser = async () => {
        try{
            setLoading(true);
            for (const user of users) {
                if (user.id == userId) {
                    setUser(user)
                }
            }

            // setUser(userResult);
        }catch (err) {
            console.error(err)
        } finally {
            setLoading(false);
        }
    }

    return (
        <UserContext.Provider value={{user, loading}} >
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    if (context === null) {
        throw new Error("useUser must be used within the context");
    }
    return context;
}