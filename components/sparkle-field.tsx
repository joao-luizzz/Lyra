"use client"

export function SparkleField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 22 }).map((_, i) => (
        <span
          key={i}
          className="sparkle"
          style={
            {
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              animationDelay: `${(i % 10) * 0.7}s`,
              animationDuration: `${4 + (i % 5)}s`,
            } as React.CSSProperties
          }
        />
      ))}

      <style jsx global>{`
        .sparkle {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: radial-gradient(circle, #0088ff 0%, rgba(0, 136, 255, 0) 70%);
          box-shadow: 0 0 6px 1px rgba(0, 136, 255, 0.6);
          opacity: 0;
          animation: sparkle-twinkle 6s ease-in-out infinite;
        }

        .sparkle:nth-child(3n) {
          background: radial-gradient(circle, #e53935 0%, rgba(229, 57, 53, 0) 70%);
          box-shadow: 0 0 6px 1px rgba(229, 57, 53, 0.6);
        }

        .sparkle:nth-child(3n + 1) {
          background: radial-gradient(circle, #ffab00 0%, rgba(255, 171, 0, 0) 70%);
          box-shadow: 0 0 6px 1px rgba(255, 171, 0, 0.6);
        }

        @keyframes sparkle-twinkle {
          0%,
          100% {
            opacity: 0;
            transform: scale(0.6) translateY(0);
          }
          50% {
            opacity: 0.85;
            transform: scale(1.4) translateY(-8px);
          }
        }
      `}</style>
    </div>
  )
}
