import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Hero.css";

export default function Hero({ image, eyebrow, title, subtitle, children, height = "tall" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section className={`hero hero--${height}`} ref={ref}>
      <motion.div className="hero__bg" style={{ y }}>
        <img src={image} alt="" />
        <div className="hero__scrim" />
        <div className="hero__vignette" />
      </motion.div>

      <motion.div className="hero__content container" style={{ opacity }}>
        {eyebrow && (
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {eyebrow}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            {subtitle}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {children}
          </motion.div>
        )}
      </motion.div>

      <div className="hero__border" />
    </section>
  );
}
