import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [openModal, setOpenModal] =useState(false);

    return (
        <AuthContext.Provider value={{ auth, setAuth, openModal, setOpenModal }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;