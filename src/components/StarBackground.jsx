import { useEffect, useRef } from "react";

export const StarBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let stars = [];
    let meteors = [];

    const init = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

      // Limit star density for performance
      const numberOfStars = Math.min(Math.floor((width * height) / 12000), 150);
      stars = Array.from({ length: numberOfStars }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.3,
        speed: Math.random() * 0.02 + 0.005,
      }));

      meteors = Array.from({ length: 3 }, () => createMeteor());
    };

    const createMeteor = () => ({
      x: Math.random() * window.innerWidth + window.innerWidth * 0.5,
      y: Math.random() * window.innerHeight * 0.5 - window.innerHeight * 0.2,
      size: Math.random() * 1.5 + 1,
      length: Math.random() * 80 + 40,
      speed: Math.random() * 10 + 5,
      opacity: 1,
    });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        // Subtle twinkling
        star.opacity += star.speed;
        if (star.opacity > 0.8 || star.opacity < 0.2) star.speed *= -1;
      });

      meteors.forEach((meteor, index) => {
        ctx.beginPath();
        const gradient = ctx.createLinearGradient(
          meteor.x, meteor.y,
          meteor.x - meteor.length, meteor.y + meteor.length
        );
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = meteor.size;
        ctx.moveTo(meteor.x, meteor.y);
        ctx.lineTo(meteor.x - meteor.length, meteor.y + meteor.length);
        ctx.stroke();

        meteor.x -= meteor.speed;
        meteor.y += meteor.speed;

        if (meteor.x < -100 || meteor.y > window.innerHeight + 100) {
          meteors[index] = createMeteor();
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    init();
    draw();

    window.addEventListener("resize", init);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 bg-transparent"
      style={{ width: "100%", height: "100%" }}
    />
  );
};
