import React, { useEffect, useState } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number; // Speed of typing
  delay?: number; // Delay before typing starts
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 100, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState(''); // Typed text
  const [index, setIndex] = useState(0); // Current character index
  const [isCursorVisible, setCursorVisible] = useState(true); // Blinking cursor state

  useEffect(() => {
    // Typing effect logic
    if (index < text.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(typingTimeout);
    }
  }, [index, text, speed]);

  useEffect(() => {
    // Delay logic before typing starts
    const delayTimeout = setTimeout(() => {
      if (index === 0) setIndex(0); // Ensure typing starts after delay
    }, delay);

    return () => clearTimeout(delayTimeout);
  }, [delay, index]);

  useEffect(() => {
    // Blinking cursor logic
    const cursorBlinkTimeout = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500); // Blink every 500ms

    return () => clearInterval(cursorBlinkTimeout);
  }, []);

  return (
    <span>
      {displayedText}
      <span
        className={`${
          isCursorVisible ? 'opacity-100 ' : 'opacity-0'
        } transition-opacity duration-200`}
      >
        _
      </span>
    </span>
  );
};

export default Typewriter;
