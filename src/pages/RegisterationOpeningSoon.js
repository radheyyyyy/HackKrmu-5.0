import "./RegisterationOpeningSoon.css";
import comingSoon from "../assets/opening-soon.jpeg"; // use your image

export default function RegisterComingSoon() {
    return (
        <div className="coming-soon-page">
            <img src={comingSoon} alt="Coming Soon" />
        </div>
    );
}
