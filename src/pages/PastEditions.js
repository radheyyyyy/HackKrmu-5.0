// =============================
// PAST EDITIONS – PERFECT HONEYCOMB (36 UNIQUE IMAGES)
// =============================

import "./PastEditions.css";

// FRONT IMAGES (18)
import f1 from "../assets/past/front/1.jpg";
import f2 from "../assets/past/front/2.jpg";
import f3 from "../assets/past/front/3.jpg";
import f4 from "../assets/past/front/4.jpg";
import f5 from "../assets/past/front/5.jpg";
import f6 from "../assets/past/front/6.jpg";
import f7 from "../assets/past/front/7.jpg";
import f8 from "../assets/past/front/8.jpg";
import f9 from "../assets/past/front/9.jpg";
import f10 from "../assets/past/front/10.jpg";
import f11 from "../assets/past/front/11.jpg";
import f12 from "../assets/past/front/12.jpg";
import f13 from "../assets/past/front/13.jpg";
import f14 from "../assets/past/front/14.jpg";
import f15 from "../assets/past/front/15.jpg";
import f16 from "../assets/past/front/16.jpg";
import f17 from "../assets/past/front/17.jpg";
import f18 from "../assets/past/front/18.jpg";

// BACK IMAGES (18 – COMPLETELY DIFFERENT)
import b1 from "../assets/past/back/19.jpg";
import b2 from "../assets/past/back/20.jpg";
import b3 from "../assets/past/back/21.jpg";
import b4 from "../assets/past/back/22.jpg";
import b5 from "../assets/past/back/23.jpg";
import b6 from "../assets/past/back/24.jpg";
import b7 from "../assets/past/back/25.jpg";
import b8 from "../assets/past/back/26.jpg";
import b9 from "../assets/past/back/27.jpg";
import b10 from "../assets/past/back/28.jpg";
import b11 from "../assets/past/back/29.jpg";
import b12 from "../assets/past/back/30.jpg";
import b13 from "../assets/past/back/31.jpg";
import b14 from "../assets/past/back/32.jpg";
import b15 from "../assets/past/back/33.jpg";
import b16 from "../assets/past/back/34.jpg";
import b17 from "../assets/past/back/35.jpg";
import b18 from "../assets/past/back/36.jpg";

// helper
const H = (front, back) => ({ front, back });

// 18 HEXES → 5–4–5–4
const rows = [
    // Row 1 (5)
    [
        H(f1, b8),
        H(f2, b13),
        H(f3, b3),
        H(f4, b4),
        H(f5, b5),
    ],

    // Row 2 (4)
    [
        H(b6, f17),
        H(b7, f7),
        H(f8, b1),
        H(f9, b9),
    ],

    // Row 3 (5)
    [
        H(f10, b10),
        H(f11, b11),
        H(f12, b12),
        H(f13, b2),
        H(f14, b14),
    ],

    // Row 4 (4)
    [
        H(f15, b15),
        H(f16, b16),
        H(b17, f6),
        H(f18, b18),
    ],
];

export default function PastEditions() {
    return (
        <section className="past-gallery">
            
            <div className="gallery-heading">
                <span className="gallery-ghost">GALLERY</span>
                <h2 className="hero-title gallery-main-title">
                    GALLERY
                </h2>
            </div>

            <div className="honeycomb">
                {rows.map((row, r) => (
                    <div
                        key={r}
                        className={`hex-row ${row.length === 4 ? "offset" : ""}`}
                    >
                        {row.map((item, i) => (
                            <div className="hex-wrap" key={i}>
                                <div className="hex">
                                    <div
                                        className="hex-face front"
                                        style={{ backgroundImage: `url(${item.front})` }}
                                    />
                                    <div
                                        className="hex-face back"
                                        style={{ backgroundImage: `url(${item.back})` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}
