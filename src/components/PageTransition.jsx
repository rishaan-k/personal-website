import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageTransition = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const blocks = 12;
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const blockVariants = {
    initial: {
      x: '100vw',
    },
    animate: {
      x: ['100vw', '0vw', '0vw', '-100vw'],
      transition: {
        duration: 2,
        times: [0, 0.3, 0.7, 1],
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '100%' }}>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999 }}>
        {[...Array(blocks)].map((_, index) => {
          const isEven = index % 2 === 0;
          // Make blocks overlap by starting the next block before the previous one finishes
          const delay = isEven ? index * 0.15 : (index * 0.15) + 0.075;
          
          return (
            <motion.div
              key={index}
              style={{
                position: 'absolute',
                top: `${(index * 100) / blocks}%`,
                left: 0,
                right: 0,
                height: `${100 / blocks}%`,
                backgroundColor: '#ff5252',
                boxShadow: '0 0 10px rgba(0,0,0,0.2)',
              }}
              initial="initial"
              animate="animate"
              variants={blockVariants}
              transition={{
                delay: delay,
              }}
            />
          );
        })}
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            style={{ position: 'relative', zIndex: 1 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PageTransition; 