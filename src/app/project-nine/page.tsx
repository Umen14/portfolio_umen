"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const categories = {
  Programming: [
    { word: "react", hint: "A popular JavaScript library for building UI" },
    { word: "javascript", hint: "The programming language of the web" },
    { word: "hangman", hint: "The game you are playing now!" }
  ],
  Medical: [
    { word: "anatomy", hint: "Study of body structure" },
    { word: "surgery", hint: "A medical procedure involving an operation" },
    { word: "vaccine", hint: "A biological preparation that provides immunity" }
  ]
};

const Hangman = () => {
  const [category, setCategory] = useState<keyof typeof categories | null>(null);
  const [selectedWord, setSelectedWord] = useState("");
  const [hint, setHint] = useState("");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    if (category) {
      const words = categories[category];
      const randomWord = words[Math.floor(Math.random() * words.length)];
      setSelectedWord(randomWord.word);
      setHint(randomWord.hint);
    }
  }, [category]);

  const handleGuess = (letter: string) => {
    if (guessedLetters.includes(letter) || gameOver || gameWon) return;
  
    setGuessedLetters([...guessedLetters, letter]);
  
    // Check if the guessed letter is incorrect before updating wrongGuesses
    if (!selectedWord.includes(letter)) {
      setWrongGuesses((prev) => {
        const newWrongGuesses = prev + 1;
        if (newWrongGuesses >= 6) setGameOver(true);
        return newWrongGuesses;
      });
    }
  
    // Check if the player has guessed all letters correctly
    const allLettersGuessed = selectedWord.split("").every((l) => guessedLetters.includes(l) || l === letter);
    if (allLettersGuessed) setGameWon(true);
  };
  

  const restartGame = () => {
    setCategory(null);
    setGuessedLetters([]);
    setWrongGuesses(0);
    setGameOver(false);
    setGameWon(false);
  };

  const renderStickman = () => {
    const parts = [
      { className: "w-10 h-10 bg-white rounded-full absolute top-10 left-[95px] -translate-x-1/2", visible: wrongGuesses >= 1 }, // Lower head
      { className: "w-[4px] h-10 bg-white absolute top-[80px] left-[95px] -translate-x-1/2", visible: wrongGuesses >= 2 }, // Longer body
      { className: "w-14 h-[4px] bg-white absolute top-[90px] left-[50%] -translate-x-1/2 -rotate-45", visible: wrongGuesses >= 3 }, // Longer left arm
      { className: "w-14 h-[4px] bg-white absolute top-[90px] left-[110px] -translate-x-1/2 rotate-45", visible: wrongGuesses >= 4 }, // Longer right arm
      { className: "w-[4px] h-10 bg-white absolute top-[110px] left-[82px] -translate-x-1/2 rotate-45", visible: wrongGuesses >= 5 }, // Longer left leg
      { className: "w-[4px] h-10 bg-white absolute top-[111px] left-[110px]  -translate-x-1/2 -rotate-45", visible: wrongGuesses >= 6 }, // Longer right leg
    ];


    return parts.map((part, index) =>
      part.visible ? (
        <motion.div
          key={index}
          className={part.className}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      ) : null
    );
  };

  return (
    <div>
      <div className='pt-8 max-w-fit ml-10 '>
                <Link href="/projects" passHref className='hover:scale-105 transition-transform duration-300'>
                    <div className="flex items-center space-x-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 text-white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"
                            />
                        </svg>
                        <div className="text-white font-mono text-xl">/. back .\</div>
                    </div>
                </Link>
            </div>
   <div>Here the games that was done for fun</div>
   <div>This game was just for fun purpose dont u dare judge me my senior SE</div>
   </div>

  )
};

export default Hangman;
