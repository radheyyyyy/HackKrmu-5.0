import { useEffect, useRef } from "react";
import "./GlitchText.css";

export default function GlitchText({ text }) {
    const el = useRef(null);

    useEffect(() => {
        const node = el.current;
        if (!node) return;

        let active = false;

        const glitch = () => {
            if (active) return;
            active = true;

            const duration = 120 + Math.random() * 180; // burst length
            const offsetX = () => `${(Math.random() * 16 - 8).toFixed(0)}px`;
            const skew = () => `${(Math.random() * 8 - 4).toFixed(1)}deg`;

            // random slices
            const sliceTop = Math.random() * 60;
            const sliceHeight = 10 + Math.random() * 30;

            node.style.setProperty("--tx-main", offsetX());
            node.style.setProperty("--skew", skew());

            node.style.setProperty("--clip-magenta",
                `inset(${sliceTop}% 0 ${100 - sliceTop - sliceHeight}% 0)`
            );

            node.style.setProperty("--clip-cyan",
                `inset(${sliceTop + 5}% 0 ${100 - sliceTop - sliceHeight - 5}% 0)`
            );

            node.classList.add("glitch-active");

            setTimeout(() => {
                node.classList.remove("glitch-active");
                node.style.removeProperty("--tx-main");
                node.style.removeProperty("--skew");
                node.style.removeProperty("--clip-magenta");
                node.style.removeProperty("--clip-cyan");
                active = false;
            }, duration);
        };

        const loop = () => {
            glitch();
            const next = 600 + Math.random() * 1400; // pause
            setTimeout(loop, next);
        };

        loop();
    }, []);

    return (
        <span
            ref={el}
            className="js-glitch"
            data-text={text}
        >
            {text}
        </span>
    );
}
