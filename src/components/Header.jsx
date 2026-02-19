import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

export function Header() {
    const { theme } = useContext(ThemeContext);

    return(
        <header>
            <h1>Theme: {theme}</h1>
        </header>
    )
}