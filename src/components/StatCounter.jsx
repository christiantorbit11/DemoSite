import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";

export default function StatCounter({ value, suffix = "", label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const numeric = parseInt(String(value).replace(/[^0-9]/g, ""), 10) || 0;
  const [display, setDisplay] = useState(0);
  const motionVal = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionVal, numeric, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, numeric, motionVal]);

  return (
    <div className="stat-counter" ref={ref}>
      <span className="stat-counter__value">
        {display.toLocaleString()}
        {suffix}
      </span>
      <span className="stat-counter__label">{label}</span>
    </div>
  );
}
