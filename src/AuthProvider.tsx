import { createContext, useState, useEffect } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

//Interfaz de tipos de datos del contexto de autenticación
interface AuthContextProps {
  user: User | null;
  loading: boolean;
}

//Crear el contexto
export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

//Provider que maneja el estado de autenticación
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
