import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TextMotion = ({ children }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, y: 75 },
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
      transition={{ duration: 0.4, delay: 0.2, ease: 'easeInOut' }}
      variants={variants}
      >
    {children}
      
    </motion.div>
  )
}

export default TextMotion