import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 35 });
  const sy = useSpring(y, { stiffness: 500, damping: 35 });

  useEffect(() => {
    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
    };
    const onLeave = () => setHidden(true);
    const onOver = (e) => {
      const t = e.target;
      if (
        t.closest("a, button, input, textarea, [data-cursor-hover], [role='button']")
      ) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseover", onOver);
    };
  }, [x, y]);

  return (
    <>
      <motion.div
        data-testid="custom-cursor-dot"
        style={{ x: sx, y: sy }}
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 ${
            hovering ? "h-10 w-10 border border-cyan-400 bg-cyan-400/10" : "h-2 w-2 bg-cyan-400"
          } ${hidden ? "opacity-0" : "opacity-100"}`}
          style={{ boxShadow: "0 0 18px rgba(0,240,255,0.6)" }}
        />
      </motion.div>
    </>
  );
}
