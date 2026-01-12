import { useEffect } from "react";

export default function CustomCursor() {
    useEffect(() => {
        // Disable on touch devices
        if ("ontouchstart" in window) return;

        const cursor = document.getElementById("custom-cursor");
        if (!cursor) return;

        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;

        const speed = 0.30;

        // Smooth cursor follow
        const animate = () => {
            cursorX += (mouseX - cursorX) * speed;
            cursorY += (mouseY - cursorY) * speed;
            cursor.style.left = `${cursorX}px`;
            cursor.style.top = `${cursorY}px`;
            requestAnimationFrame(animate);
        };

        animate();

        const move = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        document.addEventListener("mousemove", move);

        // Target only links & buttons
        const targets = document.querySelectorAll("a, button");

        // Hover ON
        const magnetOn = (e) => {
            cursor.classList.add("magnetic");

            // 🛑 Keep cursor WHITE inside FAQ & Footer
            if (!e.target.closest(".no-dark-cursor")) {
                cursor.classList.add("dark");
            }
        };

        // Hover OFF
        const magnetOff = () => {
            cursor.classList.remove("magnetic");
            cursor.classList.remove("dark");
        };

        targets.forEach(el => {
            el.addEventListener("mouseenter", magnetOn);
            el.addEventListener("mouseleave", magnetOff);
        });

        return () => {
            document.removeEventListener("mousemove", move);
            targets.forEach(el => {
                el.removeEventListener("mouseenter", magnetOn);
                el.removeEventListener("mouseleave", magnetOff);
            });
        };
    }, []);

    return null;
}
