import { useEffect, useState } from "react";
import { useInView } from "./hooks/useInView";
import "./Prizes.css";

/* ================= PRIZE CARD ================= */

function Prize({ amount, title, variant, active }) {
    const [val, setVal] = useState(0);

    const medalMap = {
        first: "🥇",
        second: "🥈",
        third: "🥉",
    };

    useEffect(() => {
        if (!active) return;

        let current = 0;
        setVal(0);

        const step = Math.ceil(amount / 40);

        const timer = setInterval(() => {
            current += step;
            if (current >= amount) {
                setVal(amount);
                clearInterval(timer);
            } else {
                setVal(current);
            }
        }, 30);

        return () => clearInterval(timer);
    }, [amount, active]);

    return (
        <div className={`prize-card ${variant}`}>
            <div className="medal">{medalMap[variant]}</div>
            <div className="prize-amount">₹{val.toLocaleString()}</div>
            <div className="prize-title">{title}</div>
        </div>
    );
}

/* ================= PRIZE POOL ================= */

function ScrollingPrizePool({ target, active }) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!active) return;

        let current = 0;
        setValue(0);

        const increment = Math.ceil(target / 70);

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setValue(target);
                clearInterval(timer);
            } else {
                setValue(current);
            }
        }, 28);

        return () => clearInterval(timer);
    }, [target, active]);

    return (
        <span className="scrolling-prize">
            ₹{value.toLocaleString()}+
        </span>
    );
}

/* ================= MAIN ================= */

export default function Prizes() {
    const [sectionRef, active] = useInView({ threshold: 0.6 });

    return (
        <section className="prizes-page" ref={sectionRef}>
            <div className="prizes-heading-wrapper">
                <span className="prizes-ghost">PRIZES</span>
                <h1 className="hero-title prizes-main-title">PRIZES</h1>
            </div>

            {/* TOTAL PRIZE POOL */}
            <div className="prize-pool">
                <div className="prize-pool-line" style={{ marginTop: "-120px" }} />

                <div className="prize-pool-text">
                    PRIZE POOL –{" "}
                    <ScrollingPrizePool target={500000} active={active} />
                </div>

                <div className="prize-pool-sub" style={{ marginTop: "20px" }}>
                    Track Prizes & Goodies
                </div>

                <div className="prize-pool-line" style={{ marginBottom: "100px" }} />
            </div>

            {/* PODIUM */}
            <div className="podium-wrapper">
                <div className="podium-column second">
                    <Prize
                        amount={30000}
                        title="Runner Up"
                        variant="second"
                        active={active}
                    />
                    <div className="podium-base" style={{ marginBottom: "-150px" }} />
                </div>

                <div className="podium-column first">
                    <Prize
                        amount={50000}
                        title="Champion"
                        variant="first"
                        active={active}
                    />
                    <div className="podium-base" style={{ marginBottom: "-150px" }} />
                </div>

                <div className="podium-column third">
                    <Prize
                        amount={20000}
                        title="2nd Runner Up"
                        variant="third"
                        active={active}
                    />
                    <div className="podium-base" style={{ marginBottom: "-150px" }} />
                </div>
            </div>
        </section>
    );
}
