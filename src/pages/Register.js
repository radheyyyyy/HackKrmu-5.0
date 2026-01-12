import "./Register.css";

export default function Register() {
    return (
        <div className="register-page">
            <h1 className="register-title">Register for HACK KRMU 5.0</h1>

            {/* 🔴 REPLACE FORM LINK BELOW */}
            <iframe
                title="Hackathon Registration"
                src="https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID/viewform?embedded=true"
                className="register-form"
            >
                Loading…
            </iframe>
        </div>
        
    );
}
