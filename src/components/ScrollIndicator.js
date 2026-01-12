import { useEffect, useState } from "react";
import "./ScrollIndicator.css";

export default function ScrollIndicator() {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const scrollTop = window.scrollY;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            setWidth((scrollTop / height) * 100);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return <div className="scroll-indicator" style={{ width: `${width}%` }} />;
}
