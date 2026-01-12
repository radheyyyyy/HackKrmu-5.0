import { useEffect } from "react";
import "./Footer.css";

export default function Footer() {

    /* ================= SCROLL PROGRESS LOGIC ================= */
    useEffect(() => {
        const btn = document.querySelector(".scroll-top");

        const updateScrollProgress = () => {
            if (!btn) return;

            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const progress = docHeight > 0 ? scrollTop / docHeight : 0;
            btn.style.setProperty("--scroll", `${progress * 360}deg`);
        };

        window.addEventListener("scroll", updateScrollProgress);
        updateScrollProgress();

        return () => window.removeEventListener("scroll", updateScrollProgress);
    }, []);

    return (
        <footer className="footer">
            <div className="footer-grid">

                {/* BRAND */}
                <div className="footer-col brand">
                    <div className="brand-stack">
                        <span className="brand-title">HACK KRMU 5.0</span>

                        <span className="brand-sub">
                            HackKRMU is a premier technology hackathon organized by KR Mangalam University, created to push the boundaries of innovation and problem-solving.
                        </span>
                    </div>
                </div>

                {/* VENUE */}
                <div className="footer-col">
                    <h3 style={{ marginLeft: "10px", marginBottom: "10px" }}>
                        Venue
                    </h3>
                    <p style={{ marginLeft: "-30px", marginTop: "20px" }}>
                        K.R. Mangalam University<br />
                        Sohna Road, Gurugram<br />
                        Haryana – 122103
                    </p>
                </div>

                {/* LINKS + SOCIAL */}
                <div className="footer-col">
                    <h3 style={{ marginBottom: "15px", marginLeft: "35px" }}>
                        Links
                    </h3>

                    <a
                        href="https://www.krmangalam.edu.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="single-link"
                    >
                        University Website
                    </a>

                    <p className="social-label">Social Media</p>

                    <div className="brand-socials">
                        <a
                            href="https://www.instagram.com/hackkrmu.official"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ig
                        </a>
                        <a
                            href="https://www.linkedin.com/school/krmuniv/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            in
                        </a>
                    </div>
                </div>

                {/* MAP */}
                <div className="footer-col map">
                    <h3 style={{ marginBottom: "10px", marginLeft: "80px" }}>
                        Location
                    </h3>

                    <div className="map-wrapper">
                        <iframe
                            title="KRMU Location"
                            src="https://www.google.com/maps?q=K.R.%20Mangalam%20University,%20Gurugram&output=embed"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                © 2026 Hack KRMU. All rights reserved.
            </div>

            {/* SCROLL TO TOP */}
            <button
                className="scroll-top"
                aria-label="Scroll to top"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
                <span className="arrow">↑</span>
            </button>
        </footer>
    );
}
