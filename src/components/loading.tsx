// Loading.tsx
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Loading = () => {
  const [dots, setDots] = useState(".");
  const [direction, setDirection] = useState("increasing");

  // Handle the dots animation
  useEffect(() => {
    const timer = setInterval(() => {
      setDots((prev) => {
        if (direction === "increasing") {
          if (prev === ".") return "..";
          if (prev === "..") {
            setDirection("decreasing");
            return "...";
          }
        }
        if (direction === "decreasing") {
          if (prev === "...") return "..";
          if (prev === "..") {
            setDirection("increasing");
            return ".";
          }
        }
        return ".";
      });
    }, 600); // Adjust interval as needed
    return () => clearInterval(timer);
  }, [direction]);

  return (
    <div className="relative flex h-screen flex-col items-center justify-center">
      <Image
        className=""
        width={984}
        height={720}
        src="/img/loading/loading.gif"
        alt="keith"
      />
      <span className="absolute pt-36 text-lg md:pt-60 md:text-xl">
        Loading
        <motion.span
          animate={{ opacity: [1, 1, 1] }}
          transition={{ duration: 1.5, loop: Infinity, ease: "easeInOut" }}
        >
          {dots}
        </motion.span>
      </span>
    </div>
  );
};

export default Loading;
