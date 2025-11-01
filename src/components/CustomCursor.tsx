import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners
    document.addEventListener("mousemove", updateCursor);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"]'
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", updateCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Hide default cursor */}
      <style>
        {`
          body, html {
            cursor: none !important;
          }
          a, button, [role="button"] {
            cursor: none !important;
          }
        `}
      </style>

      {/* Custom cursor */}
      <Box
        position="fixed"
        left={`${position.x}px`}
        top={`${position.y}px`}
        width="24px"
        height="24px"
        pointerEvents="none"
        zIndex={9999}
        transform="translate(-50%, -50%)"
        transition="transform 0.1s ease"
      >
        {/* Cursor arrow */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          style={{
            transform: isHovering ? "scale(1.2)" : "scale(1)",
            transition: "transform 0.2s ease",
          }}
        >
          <path
            d="M3 3L21 12L12 13L8 21L3 3Z"
            fill="black"
            stroke="white"
            strokeWidth="1"
          />
        </svg>
      </Box>
    </>
  );
};

export default CustomCursor;
