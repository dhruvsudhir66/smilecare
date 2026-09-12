"use client";

import {
  motion,
  type HTMLMotionProps,
} from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  ...props
}: RevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ImageReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{
        clipPath: "inset(100% 0 0 0)",
      }}
      whileInView={{
        clipPath: "inset(0% 0 0 0)",
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 1.1,
        delay,
        ease: [0.76, 0, 0.24, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.1,
      }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.09,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function MotionArticle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.article
      variants={staggerItem}
      className={className}
    >
      {children}
    </motion.article>
  );
}