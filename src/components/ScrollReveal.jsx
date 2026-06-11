import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 1200,
  className = '',
  style = {},
  ...props
}) {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef(null);
  const [scrollDirection, setScrollDirection] = useState('down');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      } else if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
        } else {
          // Reset reveal state when scrolling out of viewport
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const absoluteTop = rect.top + window.scrollY;

            // Only reset if it's not near the very top of the page.
            if (absoluteTop > 300) {
              setIsRevealed(false);
            } else {
              // If near the top, reveal it if the user is at the top of the page
              if (window.scrollY < 100) {
                setIsRevealed(true);
              } else {
                setIsRevealed(false);
              }
            }
          }
        }
      },
      {
        threshold: 0.05, // Trigger early when 5% of the element enters the viewport
        rootMargin: '-80px 0px -80px 0px' // Margin on top and bottom so animations trigger within visible area when scrolling both directions
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getTransitionStyle = () => {
    let transform = 'translate(0, 0)';
    let opacity = isRevealed ? '1' : '0';

    if (!isRevealed) {
      let currentDirection = direction;

      // Adjust animation direction based on scrolling direction to make animations natural
      if (scrollDirection === 'up') {
        if (direction === 'up') {
          currentDirection = 'down'; // start from translate(0, -40px)
        } else if (direction === 'down') {
          currentDirection = 'up'; // start from translate(0, 40px)
        }
      }

      switch (currentDirection) {
        case 'left':
          transform = 'translate(-40px, 0)';
          break;
        case 'right':
          transform = 'translate(40px, 0)';
          break;
        case 'up':
          transform = 'translate(0, 40px)';
          break;
        case 'down':
          transform = 'translate(0, -40px)';
          break;
        case 'fade':
        default:
          transform = 'none';
          break;
      }
    }

    return {
      opacity,
      transform,
      transitionProperty: 'opacity, transform',
      transitionDuration: `${duration}ms`,
      transitionDelay: `${delay}ms`,
      transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      willChange: 'opacity, transform',
      ...style
    };
  };

  return (
    <div
      ref={ref}
      className={className}
      style={getTransitionStyle()}
      {...props}
    >
      {children}
    </div>
  );
}

