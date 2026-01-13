import "./About.css";
import aboutMain from "../assets/about/about.jpg";

// Partner logos
import codecrafters from "../assets/about/codecrafters.png";
import balsamiq from "../assets/about/balsamiq.png";
import tws from "../assets/about/tws.png";
import interviewbuddy from "../assets/about/interviewbuddy.png";
import xyz from "../assets/about/xyz.png";
// import iskcon from "../assets/about/iskcon.png";
// import hackquest from "../assets/about/hackquest.png";
// import gdg from "../assets/about/gdg.png";
// import mindspark from "../assets/about/mindspark.png";
import codingninjas from "../assets/about/codingninjas.png";
import codeoncampus from "../assets/about/codeoncampus.png";
import hacktheleague from "../assets/about/hacktheleague.png";
import givemycertificate from "../assets/about/givemycertificate.png";
import ocd from "../assets/about/ocd.png";
import msla from "../assets/about/msla.png";
import thepublicsquare from "../assets/about/thepublicsquare.png";
import hackthemountains from "../assets/about/hackthemountains.png";
import devstation from "../assets/about/devstation.png";
import threeway from "../assets/about/threeway.png";
import ooview from "../assets/about/ooview.png";
import sudanstech from "../assets/about/sudanstech.png";
import ccg from "../assets/about/ccg.png";
import hackcbs from "../assets/about/hackcbs.png";
import azure from "../assets/about/azure.png";
import oreodroiders from "../assets/about/oreodroiders.png";
import devsdungeon from "../assets/about/devsdungeon.png";
import tversiton from "../assets/about/tversiton.png";
import codesetgo from "../assets/about/codesetgo.png";
import tfc from "../assets/about/tfc.png";
import devlovers from "../assets/about/devlovers.png";
import gdgnewdelhi from "../assets/about/gdgnewdelhi.png";
import omi from "../assets/about/omi.png";

export default function About() {
    return (
        <section className="about-page" id="about">

            {/* ================= HEADING ================= */}
            <div className="about-heading">
                <span className="about-ghost">ABOUT US</span>
                <h1 className="hero-title about-main-title">ABOUT US</h1>
            </div>

            {/* ================= CONTENT ================= */}
            <div className="about-top">
                <div className="about-left">
                    {/* <h2>What is Hack KRMU?</h2> */}

                    {/* <div className="about-right">
                    <img src={aboutMain} alt="Hack KRMU Event" />
                </div> */}

                    <p>
                        HackKRMU is the flagship annual hackathon hosted by KR Mangalam University,
                        bringing together innovators, developers, designers, and problem-solvers
                        from across the country under one roof.
                    </p>

                    <p>
                        With the 5th iteration, HackKRMU is set to mark its biggest and most ambitious
                        edition ever. What started as a campus initiative has now grown into a
                        large-scale innovation festival with 1200+ participants and 200+ teams.
                    </p>

                    <p>
                        HackKRMU 5.0 is more than just a hackathon — it’s a 54-hour journey of creativity,
                        collaboration, and innovation where ideas turn into real-world impact.
                    </p>
                </div>

                <div className="about-right">
                    <img src={aboutMain} alt="Hack KRMU Event" />
                </div>

            </div>

            {/* ================= PARTNERS ================= */}

            <div className="partners-heading">
                <span className="partners-ghost">OUR TRUSTED PARTNERS</span>
                <h5 className="hero-title partners-main-title">
                    OUR TRUSTED PARTNERS
                </h5>

                {/* 🔒 FIXED TOP ROW (first 5) */}

                <div className="partners-fixed">

                    {[
                        {
                            logo: gdgnewdelhi,
                            url: "https://gdg.community.dev/gdg-new-delhi/"
                        },
                        {
                            logo: omi,
                            url: "https://www.omi.me"
                        },
                        {
                            logo: codecrafters,
                            url: "https://codecrafters.io"
                        },
                        {
                            logo: balsamiq,
                            url: "https://balsamiq.com"
                        },
                        {
                            logo: tws,
                            url: "https://www.threewaystudio.world"
                        },
                        {
                            logo: interviewbuddy,
                            url: "https://interviewbuddy.in"
                        },
                        {
                            logo: xyz,
                            url: "https://xyz.com"
                        }
                    ].map((partner, i) => (
                        <a
                            key={i}
                            href={partner.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="partner-card"
                        >
                            <img src={partner.logo} alt="Partner Logo" />
                        </a>
                    ))}
                </div>

                {/* ➡️ MOVING ROW 1 (left → right) */}
                <div className="partners-marquee left">
                    <div className="marquee-track">
                        {[
                            codeoncampus, hacktheleague, givemycertificate, ocd, msla,
                            thepublicsquare, hackthemountains, devstation, threeway, ooview, codingninjas,
                            // 🔁 duplicate starts
                            codeoncampus, hacktheleague, givemycertificate, ocd, msla,
                            thepublicsquare, hackthemountains, devstation, threeway, ooview, codingninjas,
                            // 🔁 duplicate starts
                            codeoncampus, hacktheleague, givemycertificate, ocd, msla,
                            thepublicsquare, hackthemountains, devstation, threeway, ooview, codingninjas,
                        ].map((logo, i) => (
                            <div className="partner-card" key={i}>
                                <img src={logo} alt="Partner Logo" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* ⬅️ MOVING ROW 2 (right → left) */}
                <div className="partners-marquee right">
                    <div className="marquee-track" style={{ marginBottom: "-20px" }}>
                        {[
                            sudanstech, ccg, hackcbs, azure, oreodroiders,
                            devsdungeon, tversiton, codesetgo, tfc, devlovers,
                            // 🔁 duplicate starts
                            sudanstech, ccg, hackcbs, azure, oreodroiders,
                            devsdungeon, tversiton, codesetgo, tfc, devlovers,
                            // 🔁 duplicate starts
                            sudanstech, ccg, hackcbs, azure, oreodroiders,
                            devsdungeon, tversiton, codesetgo, tfc, devlovers,
                        ].map((logo, i) => (
                            <div className="partner-card" key={i}>
                                <img src={logo} alt="Partner Logo" />
                            </div>
                        ))}

                    </div>
                </div>

                <div className="sponsor-cta">
                    <a
                        href="https://drive.google.com/file/d/1SJt_47v5dbU4EpgPWvN9eRW-BszpzJZ1/view?usp=sharing"
                        className="sponsor-btn"
                        target="_blank"
                        rel="noopener noreferrer">
                        BECOME OUR SPONSOR
                    </a>
                </div>

                {/* 
                <div className="sponsor-cta">
                    <a href="/sponsorship" className="sponsor-btn">
                        BECOME OUR SPONSOR
                    </a>
                </div> */}

            </div>

        </section>
    );
}
