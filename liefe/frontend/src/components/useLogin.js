import { useEffect, useState } from "react";
import users from '../data/users'

const useLogin = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (user) {
            window.localStorage.setItem("user", user.email)
            window.localStorage.setItem("username", user.username)
            setUser(user)
        }
    }, [user]);

    const login = (email, password) => {
        const user = users.find(user => user.password === password && user.email === email)
        setUser(user)
    };
    return [ user, login ];
};

export default useLogin;