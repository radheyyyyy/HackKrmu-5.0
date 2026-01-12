// =============================
// OUR TEAM SECTION
// =============================

import "./Team.css";

// Images
import shweta from "../assets/team/shweta.jpg";
import amar from "../assets/team/amar.jpg";
import vishwanil from "../assets/team/vishwanil.jpg";
import anuj from "../assets/team/anuj.jpg";
import krish from "../assets/team/krish.jpg";
import somya from "../assets/team/somya.jpg";
import mrinal from "../assets/team/mrinal.jpg";

/* ============================= */
/* CARD COMPONENT */
/* ============================= */

const Card = ({
    image,
    name,
    role,
    phone,
    linkedin,
    instagram,
    variant,
}) => (
    <div className={`team-card ${variant === "gold" ? "gold" : ""}`}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{role}</p>

        {/* 📞 Contact number (ONLY if provided) */}
        {phone && (
            <div className="phone" style={{ marginLeft: "-10px" }}>
                📞 <a href={`tel:${phone}`}>{phone}</a>
            </div>
        )}

        <div className="socials">
            {linkedin && (
                <a
                    href={linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="linkedin"
                >
                    in
                </a>
            )}

            {instagram && (
                <a
                    href={instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="instagram"
                >
                    ig
                </a>
            )}
        </div>
    </div>
);

/* ============================= */
/* TEAM SECTION */
/* ============================= */

export default function Team() {
    return (
        <div className="team-section">
            <div className="team-heading-wrapper">
                <span className="team-ghost">OUR TEAM</span>
                <h2 className="hero-title team-main-title">
                    OUR TEAM
                </h2>
            </div>

            {/* ================= CONVENORS ================= */}

            <div className="role-heading">
                <h2>CONVENORS</h2>
            </div>

            <div className="team-grid">
                <Card
                    variant="gold"
                    image={shweta}
                    name="Prof.(Dr.) Shweta Bansal"
                    role="Convenor"
                    linkedin="https://www.linkedin.com/in/prof-dr-shweta-a-bansal-a0495b17/"
                />

                <Card
                    variant="gold"
                    image={amar}
                    name="Dr. Amar Saraswat"
                    role="Convenor"
                    linkedin="https://www.linkedin.com/in/dr-amar-saraswat-b67453188/"
                />

                <Card
                    variant="gold"
                    image={vishwanil}
                    name="Mr. Vishwanil Suman"
                    role="Co-Convenor"
                    linkedin="https://www.linkedin.com/in/vishwanil-suman-b95b23145/"
                />
            </div>

            {/* ================= STUDENT ORGANIZERS ================= */}

            <div className="role-heading2">
                <h2>LEAD ORGANIZERS</h2>
            </div>

            <div className="team-grid">

                <Card
                    image={krish}
                    name="Krish Agarwal"
                    role="Operations Lead"
                    phone="+91 9310189324"
                    linkedin="https://www.linkedin.com/in/krish-agarwal-140920301/"
                    instagram="https://www.instagram.com/_aggarwal_krish_?igsh=MXJ4djRoNmdqcHgxbA=="
                />

                <Card
                    image={somya}
                    name="Somya Sharma"
                    role="Technical Lead"
                    phone="+91 9205038742"
                    linkedin="https://www.linkedin.com/in/somya-sharma-486a22305/"
                    instagram="https://www.instagram.com/somyaaaaa.7?igsh=ZXAzbGU0N3I5emt2&utm_source=qr"
                />

                <Card
                    image={anuj}
                    name="Anuj Narain"
                    role="Event Lead"
                    phone="+91 9811625462"
                    linkedin="https://www.linkedin.com/in/narainanuj/"
                    instagram="https://www.instagram.com/anuj_narain?igsh=MXJ6dWs2ZTRxdnBhag=="
                />

            </div>

            <div className="role-heading2">
                <h2>LEAD VOLUNTEER</h2>
            </div>
            <div className="team-grid-2">

                <Card
                    image={mrinal}
                    name="Mrinal Prakash"
                    role="Volunteer Lead"
                    // phone="+91 9310189324"
                    linkedin="https://www.linkedin.com/in/mrinal-prakash-fullstackdeveloper"
                // instagram="https://www.instagram.com/_aggarwal_krish_?igsh=MXJ4djRoNmdqcHgxbA=="
                />

            </div>


        </div>
    );
}
