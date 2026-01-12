// 

import "./Sponsorship.css";

export default function Sponsorship() {
    return (
        <section className="sponsor-page" id="sponsorship">
            <div className="sponsor-heading">
                <h1 className="section-title">SPONSORSHIP DECK</h1>
            </div>

            <div className="pdf-wrapper">
                <iframe
                    src="https://drive.google.com/file/d/1SJt_47v5dbU4EpgPWvN9eRW-BszpzJZ1/preview"
                    title="Hack KRMU Sponsorship Deck"
                    allow="autoplay"
                />
            </div>

            <a
                className="download-btn"
                href="https://drive.google.com/uc?export=download&id=1SJt_47v5dbU4EpgPWvN9eRW-BszpzJZ1"
                target="_blank"
                rel="noopener noreferrer"
            >
                DOWNLOAD PDF
            </a>
        </section>
    );
}
