"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
   
    <motion.div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <motion.h1 className="text-4xl font-bold mb-4" animate={{ scale: [0.8, 1] }} transition={{ duration: 0.5 }}>Hangman</motion.h1>
      {!category ? (
        <div>
          <p className="text-lg mb-2">Choose a category:</p>
          {Object.keys(categories).map((cat) => (
            <button key={cat} className="m-2 p-2 bg-gray-700 rounded hover:bg-gray-600" onClick={() => setCategory(cat as keyof typeof categories)}>{cat}</button>
          ))}
        </div>
      ) : (
        <>
          <p className="text-lg mb-2">Hint: {hint}</p>
          <div className="flex space-x-2 text-xl">
            {selectedWord.split("").map((letter, index) => (
              <span key={index} className="w-8 h-8 border-b-2 border-white text-center">{guessedLetters.includes(letter) ? letter : ""}</span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center mt-4">
            {"abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
              <motion.button key={letter} className="m-1 p-2 bg-gray-700 rounded text-lg hover:bg-gray-600 disabled:bg-gray-500" onClick={() => handleGuess(letter)} whileTap={{ scale: 0.9 }} disabled={guessedLetters.includes(letter)}>{letter}</motion.button>
            ))}
          </div>
          <div className="mt-6 relative w-40 h-40 flex justify-center">
            <div className="absolute top-0 left-0 w-28 h-2 bg-red-500"></div>
            <div className="absolute top-0 left-0 w-2 h-44 bg-red-500"></div>
            <div className="absolute top-[175px] right-[99px] w-28 h-2 bg-red-500"></div>
            <div className="absolute top-2 left-[90px] w-2 h-12 bg-red-500"></div>
            {renderStickman()}
          </div>
          {(gameOver || gameWon) && (
  <motion.div className="mt-10 text-2xl" animate={{ scale: [0.8, 1] }} transition={{ duration: 0.5 }}>
    {gameWon ? (
      "You Won! 🎉"
    ) : (
      <>
        <p>Game Over! 💀</p>
        <p className="text-white mt-2">The correct word was: <span className="text-green-500 sfont-bold">{selectedWord}</span></p>
      </>
    )}
  </motion.div>
)}

          <button className="mt-10 p-2 bg-gray-700 rounded hover:bg-gray-600" onClick={restartGame}>Restart</button>
        </>
      )}
    </motion.div>
  );
};

export default Hangman;
