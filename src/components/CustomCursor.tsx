import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    let raf: number;
    let target = { x: 0, y: 0 };
    let current = { x: 0, y: 0 };

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    const animate = () => {
      current.x += (target.x - current.x) * 0.15;
      current.y += (target.y - current.y) * 0.15;
      setPos({ x: current.x, y: current.y });
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] hidden md:block"
        style={{
          left: pos.x - 5,
          top: pos.y - 5,
          width: 10,
          height: 10,
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.9)",
          mixBlendMode: "difference",
          transition: "width 0.15s, height 0.15s",
        }}
      />
      <style>{`
        @media (min-width: 768px) {
          * { cursor: none !important; }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
