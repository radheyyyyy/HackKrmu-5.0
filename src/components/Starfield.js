// import { useEffect, useRef } from "react";

// export default function Starfield() {
//     const canvasRef = useRef(null);

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext("2d");

//         const resize = () => {
//             canvas.width = window.innerWidth;
//             canvas.height = window.innerHeight;
//         };

//         resize();
//         window.addEventListener("resize", resize);

//         const stars = Array.from({ length: 250 }, () => ({
//             x: Math.random() * canvas.width,
//             y: Math.random() * canvas.height,
//             z: Math.random() * canvas.width,
//         }));

//         function animate() {
//             ctx.fillStyle = "black";
//             ctx.fillRect(0, 0, canvas.width, canvas.height);

//             ctx.fillStyle = "white";
//             stars.forEach((star) => {
//                 star.z -= 2;
//                 if (star.z <= 0) star.z = canvas.width;

//                 const sx = (star.x - canvas.width / 2) * (canvas.width / star.z);
//                 const sy = (star.y - canvas.height / 2) * (canvas.width / star.z);

//                 const x = sx + canvas.width / 2;
//                 const y = sy + canvas.height / 2;

//                 const size = 1.2 * (canvas.width / star.z);
//                 ctx.fillRect(x, y, size, size);
//             });

//             requestAnimationFrame(animate);
//         }

//         animate();
//         return () => window.removeEventListener("resize", resize);
//     }, []);

//     return (
//         <canvas
//             ref={canvasRef}
//             style={{
//                 position: "fixed",
//                 inset: 0,
//                 width: "100vw",
//                 height: "100vh",
//                 zIndex: 0,
//                 pointerEvents: "none",
//             }}
//         />
//     );
// }

import { useEffect, useRef } from "react";

export default function Starfield() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resize();
        window.addEventListener("resize", resize);

        const STAR_COUNT = 260;
        const SPEED = 2;

        const stars = Array.from({ length: STAR_COUNT }, () => ({
            x: Math.random() * canvas.width - canvas.width / 2,
            y: Math.random() * canvas.height - canvas.height / 2,
            z: Math.random() * canvas.width,
        }));

        function animate() {
            // Clear background
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // ✨ BRIGHT STAR SETTINGS
            ctx.strokeStyle = "rgba(255, 255, 255, 1)";
            ctx.lineWidth = 4;
            ctx.shadowBlur = 20;
            ctx.shadowColor = "rgba(255, 255, 255, 0.95)";

            stars.forEach((star) => {
                const prevZ = star.z;
                star.z -= SPEED;

                if (star.z <= 1) {
                    star.z = canvas.width;
                    star.x = Math.random() * canvas.width - canvas.width / 2;
                    star.y = Math.random() * canvas.height - canvas.height / 2;
                }

                const sx = (star.x / star.z) * canvas.width;
                const sy = (star.y / star.z) * canvas.width;

                const px = (star.x / prevZ) * canvas.width;
                const py = (star.y / prevZ) * canvas.width;

                const x1 = sx + canvas.width / 2;
                const y1 = sy + canvas.height / 2;
                const x2 = px + canvas.width / 2;
                const y2 = py + canvas.height / 2;

                ctx.beginPath();
                ctx.moveTo(x2, y2);
                ctx.lineTo(x1, y1);
                ctx.stroke();

                // ⭐ DRAW STAR DOT (HEAD)
                // const radius = Math.max(1.8, 4 * (1 - star.z / canvas.width));

                // ctx.beginPath();
                // ctx.arc(x1, y1, radius, 0, Math.PI * 2);
                // ctx.fillStyle = "rgba(255,255,255,1)";
                // ctx.shadowBlur = 25;
                // ctx.shadowColor = "rgba(255,255,255,1)";
                // ctx.fill();

            });

            requestAnimationFrame(animate);
        }

        animate();
        return () => window.removeEventListener("resize", resize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                inset: 0,
                width: "100vw",
                height: "100vh",
                zIndex: 0,
                pointerEvents: "none",
            }}
        />
    );
}
