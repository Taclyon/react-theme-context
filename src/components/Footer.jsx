import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { ThemeToggle } from "./ThemeToggle";

export function Footer(){
    const { theme } = useContext(ThemeContext);

    return (
        <footer>
            <h2>Footer</h2>
            <p>Copyright {new Date().getFullYear()}</p>
            <p>Current Theme: {theme}</p>
            <ThemeToggle />
            
        </footer>
    )
}