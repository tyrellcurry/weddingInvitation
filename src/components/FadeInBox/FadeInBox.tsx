import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
interface FadeInBoxProps {
  duration: number;
  delay: number;
  children: React.ReactNode;
}
const FadeInBox = ({ duration, delay, children }: FadeInBoxProps) => {
  const debug = true;
  if (debug) {
    duration = 0;
    delay = 0;
  }
  const MotionBox = motion(Box);
  return (
    <MotionBox
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 0 }}
      transition={{ duration, ease: "easeOut", delay }}
    >
      {children}
    </MotionBox>
  );
};

export default FadeInBox;
