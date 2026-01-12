import { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "themes", label: "Themes" },
    { id: "timeline", label: "Timeline" },
    { id: "past", label: "Gallery" },
    { id: "sponsors", label: "Prizes" },
    { id: "contact", label: "Our Team" },
    { id: "faq", label: "FAQ'S" },
];

export default function Navbar() {
    const [active, setActive] = useState(null);
    const linksRef = useRef(null);
    const indicatorRef = useRef(null);

    /* ================= SCROLL SPY ================= */
    useEffect(() => {
        const sectionEls = sections.map(s =>
            document.getElementById(s.id)
        );

        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight / 3;

            sectionEls.forEach(section => {
                if (!section) return;

                const top = section.offsetTop;
                const height = section.offsetHeight;

                if (scrollPos >= top && scrollPos < top + height) {
                    setActive(section.id);
                }
            });
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    /* ================= SLIDING INDICATOR ================= */
    useEffect(() => {
        if (!active || !linksRef.current || !indicatorRef.current) return;

        const activeLink = linksRef.current.querySelector(
            `span[data-id="${active}"]`
        );

        if (activeLink) {
            indicatorRef.current.style.width =
                `${activeLink.offsetWidth}px`;
            indicatorRef.current.style.left =
                `${activeLink.offsetLeft}px`;
        }
    }, [active]);

    /* ================= RIBBON WIND SWAY ================= */
    useEffect(() => {
        const ribbon = document.querySelector(".register-ribbon");
        if (!ribbon) return;

        const move = (e) => {
            const rect = ribbon.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            ribbon.style.transform = `
                rotateX(${(-y / 18)}deg)
                rotateY(${(x / 18)}deg)
            `;
        };

        const reset = () => {
            ribbon.style.transform = "rotateX(0deg) rotateY(0deg)";
        };

        ribbon.addEventListener("mousemove", move);
        ribbon.addEventListener("mouseleave", reset);

        return () => {
            ribbon.removeEventListener("mousemove", move);
            ribbon.removeEventListener("mouseleave", reset);
        };
    }, []);

    /* ================= SCROLL TO SECTION ================= */
    const scrollTo = (id) => {
        const section = document.getElementById(id);
        if (!section) return;
        section.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className="navbar">
            {/* BRAND */}
            <div className="brand" onClick={() => scrollTo("home")}>
                <img src={logo} alt="HackKRMU Logo" className="brand-logo" />
                <span className="logo-text">HACK KRMU 5.0</span>
            </div>

            {/* CENTER LINKS */}
            <div ref={linksRef} className="links center">
                {sections.map(({ id, label }) => (
                    <span
                        key={id}
                        data-id={id}
                        className={active === id ? "active" : ""}
                        onClick={() => scrollTo(id)}
                    >
                        {label}
                    </span>
                ))}
                <span ref={indicatorRef} className="nav-indicator" />
            </div>

            {/* 🔥 REGISTER RIBBON */}
            {/* <a
                href="https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="register-pill"
            >
                REGISTER NOW
            </a> */}

            <a
                href="/register"
                target="_blank"
                rel="noopener noreferrer"
                className="register-pill">
                REGISTER NOW
            </a>

        </nav>
    );
}
