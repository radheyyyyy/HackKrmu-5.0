// =============================
// MAIN PAGE CONTENT (SINGLE-PAGE SCROLL)
// =============================

import { useEffect } from "react";

// Page sections
import Themes from "./Themes";
import Timeline from "../components/Timeline";
import PastEditions from "./PastEditions";
import Sponsors from "./Prizes";
import Contact from "./Team";
import About from "./About";
import GlitchText from "../components/GlitchText";
import Countdown from "../components/Countdown";
import FAQ from "../components/FAQ";

import instagramIcon from "../assets/icons/instagram.png";

// UI Components
import Divider from "../components/Divider";

// Styles
import "./Home.css";

export default function Home() {

    /* ================================================= */
    /* SECTION REVEAL ANIMATION (ON SCROLL) */
    /* ================================================= */
    useEffect(() => {
        const sections = document.querySelectorAll(".page-section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.3 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* ================================================= */}
            {/* HERO + PRIZE POOL (SAME PAGE) */}
            {/* ================================================= */}
            <section id="home" className="page-section home shimmer-bg">

                {/* HERO */}
                <h1 className="hero-title" style={{ marginTop: "37px" }}>
                    <span className="hero-normal" style={{ marginRight: "30px" }}>
                        HACK KRMU
                    </span>
                    <span className="hero-glitch" style={{ fontSize: "5rem" }}>
                        <GlitchText text="5.0" />
                    </span>
                </h1>

                {/* EVENT DATE */}
                <div
                    className="event-dates"
                    style={{ fontSize: "30px", marginBottom: "50px", marginTop: "50px" }}
                >
                    18<span>th</span> Feb – 20<span>th</span> Feb 2026
                </div>

                <Countdown />

                {/* REGISTER + INSTAGRAM */}
                <div>
                    <a
                        href="/register"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="register-btn"
                    >
                        REGISTER NOW
                    </a>

                    <a
                        href="https://www.instagram.com/hackkrmu.official"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="insta-btn"
                        aria-label="Instagram"
                    >
                        <img src={instagramIcon} alt="Instagram" />
                    </a>

                    <p className="tagline-below">
                        54 Hours • 3 Days • 1 Amazing Experience
                    </p>
                </div>

                <div style={{ height: "80px" }} />
            </section>

            <Divider />

            {/* ABOUT */}
            <section id="about" className="page-section">
                <About />
            </section>

            <Divider />

            {/* THEMES */}
            <section id="themes" className="page-section">
                <Themes />
            </section>

            <Divider />

            {/* TIMELINE */}
            <section id="timeline" className="page-section timeline-section">
                <Timeline />
            </section>

            <Divider />

            {/* GALLERY */}
            <section id="past" className="page-section">
                <PastEditions />
            </section>

            <Divider />

            {/* SPONSORS */}
            <section id="sponsors" className="page-section">
                <Sponsors />
            </section>

            <Divider />

            {/* TEAM */}
            <section id="contact" className="page-section">
                <Contact />
            </section>

            <Divider />

            {/* FAQ */}
            <section id="faq" className="page-section">
                <FAQ />
            </section>
        </>
    );
}
