import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TextMotionBottomTop = ({ children }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={ isInView ? "visible" : "hidden"}
      transition={{ duration: 0.7, delay: 0.3, ease: 'easeInOut' }}
      variants={variants}
      >
    {children}
      
    </motion.div>
  )
}

export default TextMotionBottomTop