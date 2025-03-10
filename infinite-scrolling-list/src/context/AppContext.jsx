import {createContext, useEffect, useState} from 'react'
export const AppContext = createContext();

export default function AppProvider({children}){
    const [darkMode, setDarkMode] = useState(false);
    const [result, setResult] = useState([]);

    useEffect(()=>{
        try {
            const fetchData = async ()=>{

                const response = await fetch("https://dummyjson.com/posts?limit=10");
                const data = await response.json();
                setResult(data.posts)
            }
            fetchData();
        } catch (error) {
            console.log("error fetching data", error);
            
        }
    }, [])

    return <AppContext.Provider value={{darkMode, setDarkMode, result}}>
        {children}
    </AppContext.Provider>
}