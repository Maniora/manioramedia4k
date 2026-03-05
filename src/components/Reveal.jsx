'use client'

import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

const Reveal = ({ children, as = 'div', className = '', ...props }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const Component = as;

  return (
    <Component ref={ref} className={className} {...props}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </Component>
  );
};

export default Reveal;