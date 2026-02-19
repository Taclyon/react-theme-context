import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
    const { theme } = useContext(ThemeContext);

    return(
        <header>

            <h2>Header Component</h2>
            <p>Theme: {theme}</p>

            <ThemeToggle />
        </header>
    )
}