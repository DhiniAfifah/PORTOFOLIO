import { Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface DesktopObjectProps {
  src: string;
  alt: string;
  size?: string;
  position?: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  animation?: "float" | "bounce" | "rotate" | "none";
}

const DesktopObject = ({
  src,
  alt,
  size = "100px",
  position = {},
  animation = "float",
}: DesktopObjectProps) => {
  const getAnimationProps = () => {
    switch (animation) {
      case "float":
        return {
          animate: {
            y: [0, -10, 0],
          },
          transition: {
            duration: 3,
            repeat: Infinity,
          },
        };
      case "bounce":
        return {
          animate: {
            y: [0, -20, 0],
          },
          transition: {
            duration: 2,
            repeat: Infinity,
          },
        };
      case "rotate":
        return {
          animate: {
            rotate: [0, 360],
          },
          transition: {
            duration: 10,
            repeat: Infinity,
          },
        };
      default:
        return {
          animate: {},
          transition: {},
        };
    }
  };

  const animationProps = getAnimationProps();

  return (
    <motion.div
      animate={animationProps.animate}
      transition={animationProps.transition}
      style={{
        position: "absolute",
        ...position,
        zIndex: 1,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        objectFit="contain"
        filter="drop-shadow(0 4px 8px rgba(0,0,0,0.1))"
      />
    </motion.div>
  );
};

export default DesktopObject;
