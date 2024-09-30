// Typewriter.tsx
import React, { useEffect, useState } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number; // Optional delay prop
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 100, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const startTyping = () => {
      if (index < text.length) {
        const timeoutId = setTimeout(() => {
          setDisplayedText((prev) => prev + text[index]);
          setIndex(index + 1);
        }, speed);

        return () => clearTimeout(timeoutId);
      }
    };

    // Introduce the delay before typing starts
    const delayTimeout = setTimeout(startTyping, delay);

    return () => clearTimeout(delayTimeout);
  }, [index, text, speed, delay]);

  return <span>{displayedText}</span>;
};

export default Typewriter;
