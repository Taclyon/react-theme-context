import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { ThemeToggle } from "./ThemeToggle";

export function Content(){
    const { theme } = useContext(ThemeContext);

    return(
        <main>
            <h2>Component Content</h2>
            <p>Current Theme: {theme}</p>
            <ThemeToggle />
        </main>
    )
}