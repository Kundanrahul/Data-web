import React from 'react';
import { motion } from 'framer-motion';

const MotionWrap = ({ children }) => {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrap;


