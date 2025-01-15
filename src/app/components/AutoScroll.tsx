"use client";
import { useEffect, useRef, useState } from "react";

const AutoScroll = ({
  children,
  dragAble = true,
}: {
  children: React.ReactNode;
  dragAble?: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const [previousMouseXPosition, setPreviousMouseXPosition] = useState(0);
  const [dragDirection, setDragDirection] = useState(1);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Auto-scroll logic
    let scrollDirection = dragDirection > 0 ? -1 : 1; // 1 for forward, -1 for backward
    const scrollStep = 1; // Pixels per frame
    const intervalTime = 32; // ~60 FPS (1000ms / 60)

    const scroll = () => {
      if (!isDragging) {
        container.scrollLeft += scrollStep * scrollDirection;
        if (
          Math.ceil(container.scrollLeft + container.offsetWidth) >=
            container.scrollWidth ||
          container.scrollLeft <= 0
        ) {
          scrollDirection *= -1;
        }
      }
    };

    const interval = setInterval(scroll, intervalTime);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [isDragging]);

  // Mouse events for drag-to-scroll
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!dragAble) return;
    if (!containerRef.current) return;

    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragAble) return;
    if (!isDragging || !containerRef.current) return;

    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiplier for drag sensitivity
    containerRef.current.scrollLeft = scrollLeft - walk;
    setPreviousMouseXPosition(e.pageX);
    setDragDirection(e.pageX > previousMouseXPosition ? 1 : -1);
  };

  const handleMouseUpOrLeave = () => {
    if (!dragAble) return;
    setIsDragging(false);
  };

  return (
    <div
      ref={containerRef}
      className={`overflow-x-auto overflow-y-hidden scrollbar-hide ${
        dragAble ? "cursor-grab" : "cursor-auto"
      } hide-scrollbar w-full`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
      style={{ userSelect: "none" }} // Prevent text selection during drag
    >
      {children}
    </div>
  );
};

export default AutoScroll;
