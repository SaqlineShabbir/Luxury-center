"use client"


import React, { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const router = useRouter()


    //fetch the user and provide data
    const fetchUser = async () => {
        console.log('fetch user  called', document.cookie)
        try {
            const response = await fetch('https://luxury-center.vercel.app/api/user');

            const result = await response.json();
            console.log('resullt', result)
            if (result?.user) {
                setUser(result.user);
            }

        } catch (error) {
            console.error('Error fetching user data:', error);

        }
    }

    useEffect(() => {

        fetchUser();
    }, []);

    const logout = async () => {
        try {
            const response = await fetch('/api/logout');

            if (response.ok) {
                // If the response status is 200 OK
                console.log('Logout successful');


                // Redirect the user to the login page
                router.push('/login');
                setUser(null)
            } else {
                // If the response status is not successful (e.g., 404, 500, etc.)
                console.log(`Logout failed with status: ${response.status}`);

            }
        } catch (error) {
            // If there is a network error or any other exception
            console.error('Error during logout:', error.message);
            toast.error('Error during logout');
        }
    }


    const authInfo = {
        user,
        fetchUser,
        logout


    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;