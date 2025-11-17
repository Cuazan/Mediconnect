import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const useModal = () => {
    return useContext(AuthContext);
}

export default useModal;