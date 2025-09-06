'use client'

import { Variants } from 'framer-motion'

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0
  }
}

export const fadeIn: Variants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  }
}

export const slideInLeft: Variants = {
  initial: {
    opacity: 0,
    x: -50
  },
  animate: {
    opacity: 1,
    x: 0
  }
}

export const slideInRight: Variants = {
  initial: {
    opacity: 0,
    x: 50
  },
  animate: {
    opacity: 1,
    x: 0
  }
}

export const scaleIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8
  },
  animate: {
    opacity: 1,
    scale: 1
  }
}

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const defaultTransition = {
  duration: 0.8,
  ease: "easeOut" as const
}

export const springTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20
}

export const viewportConfig = {
  once: true,
  margin: "-100px"
}

export const animationConfig = {
  fadeInUp: {
    variants: fadeInUp,
    initial: "initial",
    whileInView: "animate",
    viewport: viewportConfig,
    transition: defaultTransition
  },
  fadeIn: {
    variants: fadeIn,
    initial: "initial",
    whileInView: "animate",
    viewport: viewportConfig,
    transition: defaultTransition
  },
  slideInLeft: {
    variants: slideInLeft,
    initial: "initial",
    whileInView: "animate",
    viewport: viewportConfig,
    transition: defaultTransition
  },
  slideInRight: {
    variants: slideInRight,
    initial: "initial",
    whileInView: "animate",
    viewport: viewportConfig,
    transition: defaultTransition
  },
  scaleIn: {
    variants: scaleIn,
    initial: "initial",
    whileInView: "animate",
    viewport: viewportConfig,
    transition: defaultTransition
  }
}