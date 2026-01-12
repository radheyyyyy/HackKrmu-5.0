import { useEffect, useRef, useState } from "react";
import "./Timeline.css";

const schedule = {
    kickoff: {
        // title: "Day 1 – 18 FEB · Kickoff Day",
        title: "Day 1 – 18 FEB",
        events: [
            ["8:30 AM", "Check-in Start"],
            ["11:00 AM", "Inauguration"],
            ["12:00 PM", "Hackathon Starts"],
            ["2:00 PM", "Lunch"],
            ["4:00 PM", "Mentor Session"],
            ["8:00 PM", "Dinner"],
            ["10:00 PM", "DJ Night"],
            ["11:00 PM", "Judgement Round 1"],
        ],
    },
    development: {
        // title: "Day 2 – 19 FEB · Development Day",
        title: "Day 2 – 19 FEB",
        events: [
            ["12:00 AM", "Redbull Fun Activity"],
            ["7:00 AM", "Result Announcement"],
            ["7:30 AM", "Breakfast"],
            ["12:00 PM", "Mentor Session"],
            ["1:00 PM", "Lunch"],
            ["4:00 PM", "Mentor Session"],
            ["8:00 PM", "Dinner"],
        ],
    },
    final: {
        // title: "Day 3 – 20 FEB · Final Showdown",
        title: "Day 3 – 20 FEB",
        events: [
            ["1:00 AM", "Judging Round 2"],
            ["7:00 AM", "Result Announcement"],
            ["7:30 AM", "Breakfast"],
            ["10:00 AM", "Final Round"],
            ["1:00 PM", "Lunch"],
            ["2:00 PM", "Winner Announcement"],
            ["2:30 PM", "Closing Ceremony"],
        ],
    },
};

export default function Timeline() {
    const [day, setDay] = useState("kickoff");
    const wrapperRef = useRef(null);
    const fillRef = useRef(null);

    useEffect(() => {
        const onScroll = () => {
            if (!wrapperRef.current || !fillRef.current) return;

            const wrap = wrapperRef.current;
            const rect = wrap.getBoundingClientRect();

            const scrollTop = window.scrollY;
            const wrapTop = scrollTop + rect.top;
            const wrapHeight = wrap.offsetHeight;
            const viewH = window.innerHeight;

            // 🔽 slightly slower + smoother
            const progress =
                (scrollTop - wrapTop + viewH * 0.28) /
                (wrapHeight - viewH * 0.65);

            const clamped = Math.min(Math.max(progress, 0), 1);

            // 🔽 slightly shorter line
            fillRef.current.style.height = `${clamped * 92}%`;
        };

        window.addEventListener("scroll", onScroll);
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, [day]);

    return (
        <section className="timeline-page">
            <div className="timeline-heading">
                <span className="timeline-ghost">EVENT TIMELINE</span>
                <h1 className="timeline-title timeline-main-title">
                    EVENT TIMELINE
                </h1>
            </div>

            {/* DAY BUTTONS */}
            <div className="timeline-tabs">
                {Object.keys(schedule).map((k) => (
                    <button
                        key={k}
                        className={day === k ? "active" : ""}
                        onClick={() => setDay(k)}
                    >
                        {k === "kickoff"
                            ? "Kickoff Day"
                            : k === "development"
                                ? "Development Day"
                                : "Final Showdown"}
                    </button>
                ))}
            </div>

            <h2 className="timeline-day">{schedule[day].title}</h2>

            <div className="timeline-wrapper" ref={wrapperRef}>
                <div className="line-base" />
                <div className="line-fill" ref={fillRef} />

                {schedule[day].events.map(([time, text], i) => (
                    <div
                        key={i}
                        className={`event ${i % 2 === 0 ? "left" : "right"}`}
                    >
                        <div className="dot" />
                        <span className="time">{time}</span>
                        <span className="label">{text}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
