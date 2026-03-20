const RadarPulse = () => {
  return (
    <svg
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      width="800"
      height="800"
      viewBox="0 0 800 800"
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <circle
          key={i}
          cx="400"
          cy="400"
          r={80 * i}
          fill="none"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="1"
          style={{
            animation: `radar-pulse 4s ease-out ${i * 0.6}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes radar-pulse {
          0% { opacity: 0.8; transform-origin: center; transform: scale(0.8); }
          100% { opacity: 0; transform-origin: center; transform: scale(1.3); }
        }
      `}</style>
    </svg>
  );
};

export default RadarPulse;
