import React, { useState, useEffect } from "react";
import Image from "next/image";

//Import IMAGES
import loading from "../dist/gif/loading-cyber-punk.gif";

//IMPORT FRAMER
import { motion, AnimatePresence } from "framer-motion";

const Loading = ({ children }) => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showLoader ? (
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.7, opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="loading"
        >
          <section className="loading-section">
            <div>
              <Image
                src={loading}
                width={370}
                height={600}
                objectFit="cover"
                alt="Loading..."
                className="loading-img"
                priority
              />
            </div>
          </section>
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.7, opacity: 0 }}
          transition={{ duration: 1.5, ease: [0.17, 0.67, 0.83, 0.67] }}
        >
          {children}
        </motion.div>
      )}
      ;
    </AnimatePresence>
  );
};

export default Loading;
