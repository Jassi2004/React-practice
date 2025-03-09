import { useEffect, useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

export default function AppProvider({children}){
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem("darkMode");
        return saved !== null ? JSON.parse(saved) : false;
    });

    // Save darkMode to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode]);


    return (
        <AppContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </AppContext.Provider>
    );
}
