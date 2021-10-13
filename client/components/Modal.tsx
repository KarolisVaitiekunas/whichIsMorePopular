import React, { ReactElement, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  isCorrect: boolean;
  isVisible: boolean;
}

function Modal({ isCorrect, isVisible }: Props): ReactElement {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          style={{
            position: "absolute",
            left: "calc(50% - 128px)",
            top: "calc(50% - 160px)",
            border: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "9rem",
            borderRadius: "8px",
            backgroundColor: isCorrect ? "green" : "red",
          }}
          className={`z-50 w-64 h-64 border-r-8 bg-${isCorrect ? "green" : "red"}-500`}
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          {isCorrect ? "✓" : "✕"}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
