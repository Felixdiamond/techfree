"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, Variant } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export const Reveal = ({
  children,
  width = "fit-content",
  delay = 0.25,
  duration = 0.5,
  direction = "up",
  className = "",
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const getVariants = () => {
    const distance = 75;
    let hidden: any = { opacity: 0 };
    let visible: any = { opacity: 1 };

    switch (direction) {
      case "up":
        hidden.y = distance;
        visible.y = 0;
        break;
      case "down":
        hidden.y = -distance;
        visible.y = 0;
        break;
      case "left":
        hidden.x = distance;
        visible.x = 0;
        break;
      case "right":
        hidden.x = -distance;
        visible.x = 0;
        break;
      case "none":
        break;
    }

    return {
      hidden,
      visible: {
        ...visible,
        transition: { duration, delay, ease: "easeOut" },
      },
    };
  };

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }} className={className}>
      <motion.div
        variants={getVariants()}
        initial="hidden"
        animate={mainControls}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) => {
  return (
    <Reveal width="100%" direction="none" delay={delay} duration={duration} className={className}>
      {children}
    </Reveal>
  );
};

export const SlideUp = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  return (
    <Reveal width="100%" direction="up" delay={delay} className={className}>
      {children}
    </Reveal>
  );
};
