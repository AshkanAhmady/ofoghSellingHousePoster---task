import {
    MoonIcon,
    SunIcon
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const DarkModeBtn = () => {
    const [theme, setTheme] = useState<string | null>("light")

    useEffect(() => {
        setTheme(localStorage.getItem("theme") || "light")
        document.body.className = localStorage.getItem("theme")!
    }, [])

    const toggleTheme = (value: string) => {
        document.body.className = value
        localStorage.setItem("theme", value)
        setTheme(value)
    }

    return (
        <div className="flex gap-2">
            {theme === "light"
                ? <MoonIcon onClick={() => toggleTheme("dark")} className={`cursor-pointer duration-150 w-6 h-6 stroke-gray-800`} />
                : <SunIcon onClick={() => toggleTheme("light")} className={`cursor-pointer duration-150 w-6 h-6 stroke-white`} />}
        </div>
    );
}

export default DarkModeBtn;