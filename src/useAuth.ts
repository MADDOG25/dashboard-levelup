import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

//Hook personalizado que permite acceso al contexto de autenticación
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth debe ser usado dentro de un AuthProvider");
    }
    return context;
};