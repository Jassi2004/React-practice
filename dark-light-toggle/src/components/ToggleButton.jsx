import { useContext, useEffect } from "react"
import {AppContext} from "../context/AppContext"



export default function ToggleButton(){

    const {darkMode, setDarkMode} = useContext(AppContext);

    const handleClick = () => {
        setDarkMode((prev) => !prev);
    }

    useEffect(()=>{
        console.log(darkMode ? "dark" : "light");
    }, [darkMode])
    return (
        <>
            <button onClick={handleClick} className="toggle">{darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}</button>
        </>
    )
}