import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let rafId;

    const updatePosition = () => {
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(updatePosition);
    };

    const onMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      // Dynamic check for data-cursor hover (Event Delegation replacement)
      const target = event.target.closest("[data-cursor]");
      if (target) {
        onEnter();
      } else {
        onLeave();
      }
    };

    const onEnter = () => cursor.classList.add("active");
    const onLeave = () => cursor.classList.remove("active");

    window.addEventListener("mousemove", onMove);
    rafId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
}
