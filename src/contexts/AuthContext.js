import { createContext, useEffect, useState } from 'react';
import axios from '../config/axios';
import jwtDecode from 'jwt-decode';
import { setToken, clearToken, getToken } from '../services/localStorage';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState('');
    const token = getToken('token');

    useEffect(() => {
        if (getToken()) {
            const token = getToken('token');
            setUser(jwtDecode(token));
            fetchUserData();
        }
    }, []);

    const fetchUserData = async () => {
        const a = jwtDecode(token);
        const res = await axios.get('/users/me');
        setUserData(res.data.user);
    };

    const login = async (email, password) => {
        try {
            const res = await axios.post('/users/login', {
                email,
                password,
            });
            setToken(res.data.token);
            setUser(res.data.user);
        } catch (err) {
            console.log(err);
        }
    };

    const logout = () => {
        clearToken();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, userData }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;

export { AuthContext };
