"use client";

import {
  motion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";

import type { ReactNode } from "react";

type RevealProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
};

export function Reveal({
  children,
  delay = 0,
  className,
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

type ImageRevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function ImageReveal({
  children,
  delay = 0,
  className = "",
}: ImageRevealProps) {
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

type StaggerProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Stagger({
  children,
  className = "",
  delay = 0,
}: StaggerProps) {
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
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/*
 * Reusable variants for staggered children.
 *
 * Explicitly typed as Variants so Framer Motion's
 * easing tuple is correctly inferred by TypeScript.
 */
export const staggerItem: Variants = {
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

type MotionArticleProps = {
  children: ReactNode;
  className?: string;
};

export function MotionArticle({
  children,
  className = "",
}: MotionArticleProps) {
  return (
    <motion.article
      variants={staggerItem}
      className={className}
    >
      {children}
    </motion.article>
  );
}