import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export function ThemeToggle(){
    const { toggleTheme } = useContext(ThemeContext)
    
    return(
        <button onClick={toggleTheme}>Change Theme</button>
    )
}