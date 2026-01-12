import "./Themes.css";

// IMPORT IMAGES
import edtech from "../assets/themes/edtech.jpg";
import cyber from "../assets/themes/cyber.jpg";
import sustain from "../assets/themes/sustain.jpg";
import health from "../assets/themes/health.jpg";
import agri from "../assets/themes/agri.jpg";
import smartcity from "../assets/themes/smartcity.jpg";
import blockchain from "../assets/themes/blockchain.jpg";
import open from "../assets/themes/open.jpg";

const themes = [
    { title: "EdTech", image: edtech },
    { title: "Cybersecurity & Threat Detection", image: cyber },
    { title: "ClimateTech & Carbon Tracking", image: sustain },
    { title: "HealthTech & MedTech", image: health },
    { title: "AgriTech & Rural Development", image: agri },
    { title: "Smart Cities & Logistics", image: smartcity },
    { title: "Crypto & Blockchain", image: blockchain },
    { title: "Open Innovation", image: open},
];

export default function Themes() {
    return (
        <section className="themes-page">
            <div className="themes-heading">
                
                <span className="themes-ghost">THEMES</span>
                <h2 className="hero-title themes-main-title">THEMES</h2>
            </div>

            <div className="theme-grid" style={{marginBottom:"-20px"}}>
                {themes.map((theme, index) => (
                    <div className="theme-card" key={index}>
                        {/* FRONT */}
                        <div className="theme-face front">
                            <span className="icon">{theme.icon}</span>
                            <h3>{theme.title}</h3>
                        </div>

                        {/* BACK IMAGE */}
                        <div
                            className="theme-face back"
                            style={{ backgroundImage: `url(${theme.image})` }}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
