import React, { useEffect, useState, useRef } from 'react';

const CustomEffects = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Smooth position tracking with interpolation
  const mouseRef = useRef({ x: 0, y: 0 }); // actual mouse position
  const dotRef = useRef({ x: 0, y: 0 });   // inner dot position (instant or fast)
  const ringRef = useRef({ x: 0, y: 0 });  // outer ring position (smooth delay)
  const spotRef = useRef({ x: 0, y: 0 });  // background spotlight position (slower delay)

  const dotElRef = useRef(null);
  const ringElRef = useRef(null);
  const spotElRef = useRef(null);

  useEffect(() => {
    // Check if mobile/touch device
    const checkMobile = () => {
      setIsMobile(
        window.matchMedia('(pointer: coarse)').matches ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      );
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      setHidden(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    // Event delegation for hover states
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.project-card') || 
        target.closest('.skill-card') || 
        target.closest('.theme-toggle') || 
        target.closest('input') || 
        target.closest('textarea') || 
        target.closest('[role="button"]') ||
        target.classList.contains('cursor-pointer');
        
      setHovered(!!isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    // Request animation frame loop for buttery smooth rendering
    let animFrameId;
    const updatePositions = () => {
      const targetX = mouseRef.current.x;
      const targetY = mouseRef.current.y;

      // Inner dot: very fast interpolation (lerp factor = 0.3)
      dotRef.current.x += (targetX - dotRef.current.x) * 0.3;
      dotRef.current.y += (targetY - dotRef.current.y) * 0.3;

      // Outer ring: slower interpolation (lerp factor = 0.15)
      ringRef.current.x += (targetX - ringRef.current.x) * 0.15;
      ringRef.current.y += (targetY - ringRef.current.y) * 0.15;

      // Spotlight: even slower, floaty interpolation (lerp factor = 0.04)
      spotRef.current.x += (targetX - spotRef.current.x) * 0.04;
      spotRef.current.y += (targetY - spotRef.current.y) * 0.04;

      // Apply transformations directly to DOM elements to bypass React render cycle for performance
      if (dotElRef.current) {
        dotElRef.current.style.transform = `translate3d(${dotRef.current.x}px, ${dotRef.current.y}px, 0) translate3d(-50%, -50%, 0)`;
      }
      if (ringElRef.current) {
        ringElRef.current.style.transform = `translate3d(${ringRef.current.x}px, ${ringRef.current.y}px, 0) translate3d(-50%, -50%, 0)`;
      }
      if (spotElRef.current) {
        spotElRef.current.style.transform = `translate3d(${spotRef.current.x}px, ${spotRef.current.y}px, 0) translate3d(-50%, -50%, 0)`;
      }

      animFrameId = requestAnimationFrame(updatePositions);
    };

    animFrameId = requestAnimationFrame(updatePositions);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animFrameId);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Background Spotlight Glow (visible in viewport from top to bottom) */}
      <div 
        ref={spotElRef}
        className="fixed top-0 left-0 w-[550px] h-[550px] rounded-full pointer-events-none z-0 filter blur-[100px] transition-opacity duration-700 select-none"
        style={{
          background: 'radial-gradient(circle, rgba(8, 145, 178, 0.12) 0%, rgba(16, 185, 129, 0.05) 50%, rgba(8, 145, 178, 0) 70%)',
          willChange: 'transform',
          opacity: hidden ? 0 : 1
        }}
      />

      {/* Custom Cursor Ring */}
      <div
        ref={ringElRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9999] border transition-all duration-300 ease-out will-change-transform mix-blend-difference select-none ${
          hidden ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
        } ${
          hovered 
            ? 'w-12 h-12 bg-white/10 border-cyan-400 dark:border-cyan-300 scale-110 shadow-lg shadow-cyan-500/20' 
            : clicked 
              ? 'w-6 h-6 border-emerald-400 bg-emerald-400/20 scale-95' 
              : 'w-9 h-9 border-cyan-500/40 dark:border-white/30 bg-transparent'
        }`}
        style={{
          transform: 'translate3d(-50%, -50%, 0)',
        }}
      />

      {/* Custom Cursor Dot */}
      <div
        ref={dotElRef}
        className={`fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[10000] transition-all duration-150 ease-out will-change-transform select-none ${
          hidden ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
        } ${
          hovered 
            ? 'scale-0 bg-transparent' 
            : clicked 
              ? 'scale-75 bg-emerald-500' 
              : 'bg-cyan-600 dark:bg-cyan-400'
        }`}
        style={{
          transform: 'translate3d(-50%, -50%, 0)',
        }}
      />
    </>
  );
};

export default CustomEffects;
