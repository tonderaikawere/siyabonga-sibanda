import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

type AnimatedCardProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  index?: number;
};

const cardVariants: Variants = {
  offscreen: {
    y: 20,
    opacity: 0,
  },
  onscreen: (custom: number = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
      delay: custom * 0.1,
    },
  }),
};

const AnimatedCard = ({
  children,
  className = '',
  delay = 0,
  index = 0,
}: AnimatedCardProps) => {
  return (
    <motion.div
      className={className}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, margin: '-100px' }}
      variants={cardVariants}
      custom={index}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
