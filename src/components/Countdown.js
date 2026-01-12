import { useEffect, useState } from "react";
import "./Countdown.css";

/* =================================================
   🔴 CHANGE EVENT DATE ONLY HERE
   -------------------------------------------------
   Hackathon Date:
   10 FEB 2026 — 10:00 AM IST
   Timezone: +05:30 (India Standard Time)
================================================= */
// Hackathon starts on: 18 FEB 2026 — 9:00 AM IST
const TARGET_DATE = new Date("2026-02-18T09:00:00+05:30");
/* ================================================= */

export default function Countdown() {
    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        danger: false,
        ended: false,
    });

    useEffect(() => {
        const calculateTime = () => {
            const now = Date.now();
            const diff = TARGET_DATE.getTime() - now;

            if (diff <= 0) {
                setTime({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                    danger: false,
                    ended: true,
                });
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));

            setTime({
                days,
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / (1000 * 60)) % 60),
                seconds: Math.floor((diff / 1000) % 60),
                danger: days < 1, // 🔴 last 24 hours
                ended: false,
            });
        };

        calculateTime();
        const interval = setInterval(calculateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    // 🚀 LIVE STATE
    if (time.ended) {
        return (
            <div className="countdown-live">
                🚀 HACKATHON IS LIVE 🚀
            </div>
        );
    }

    return (
        <div className={`countdown ${time.danger ? "danger" : ""}`}>
            <TimeBox value={time.days} label="DAYS" />
            <TimeBox value={time.hours} label="HRS" />
            <TimeBox value={time.minutes} label="MIN" />
            <TimeBox value={time.seconds} label="SEC" glitch />
        </div>
    );
}

function TimeBox({ value, label, glitch }) {
    return (
        <div className={`time-box ${glitch ? "glitch-sec" : ""}`}>
            <span>{String(value).padStart(2, "0")}</span>
            <p>{label}</p>
        </div>
    );
}
