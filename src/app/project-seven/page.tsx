"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [playerMode, setPlayerMode] = useState("AI");
  const [scores, setScores] = useState({ X: 0, O: 0, ties: 0 });
  const [winningCombo, setWinningCombo] = useState([]);

  useEffect(() => {
    if (playerMode === "AI" && !isXNext && !winner) {
      setTimeout(makeAIMove, 500);
      
    }
  }, [board, isXNext, winner, playerMode]);

  const handleClick = (index: any) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const result = checkWinner(newBoard);
    if (result) {
      setWinner(result.winner);
      setWinningCombo(result.combo);
      updateScores(result.winner);
    } else if (!newBoard.includes(null)) {
      setWinner("Tie");
      updateScores("Tie");
    }
  };

  const makeAIMove = () => {
    let bestMove = getBestMove(board, "O");
    handleClick(bestMove);
  };

  const getBestMove = (board: any, player:any) => {
    let bestScore = -Infinity;
    let move;
    
    board.forEach((cell:any, i:any) => {
      if (!cell) {
        let newBoard = [...board];
        newBoard[i] = player;
        let score = minimax(newBoard, 0, false);
        if (score > bestScore) {
          bestScore = score;
          move = i;
        }
      }
    });
    return move;
  };

  const minimax = (board: any, depth:number, isMaximizing:any) => {
    const result = checkWinner(board);
    if (result) {
      if (result.winner === "O") return 10 - depth;
      if (result.winner === "X") return depth - 10;
      return 0;
    }
    
    if (isMaximizing) {
      let bestScore = -Infinity;
      board.forEach((cell:any, i:any) => {
        if (!cell) {
          let newBoard = [...board];
          newBoard[i] = "O";
          let score = minimax(newBoard, depth + 1, false);
          bestScore = Math.max(score, bestScore);
        }
      });
      return bestScore;
    } else {
      let bestScore = Infinity;
      board.forEach((cell:any, i:any) => {
        if (!cell) {
          let newBoard = [...board];
          newBoard[i] = "X";
          let score = minimax(newBoard, depth + 1, true);
          bestScore = Math.min(score, bestScore);
        }
      });
      return bestScore;
    }
  };

  const checkWinner = (board:any) => {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return { winner: board[a], combo };
      }
    }
    return null;
  };

  const updateScores = (winner:any) => {
    setScores((prev) => ({
      ...prev,
      [winner]: prev[winner] + 1,
    }));
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setIsXNext(true);
    setWinningCombo([]);
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
    <motion.div 
      className="flex flex-col items-center justify-center min-h-screen bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 className="text-4xl font-bold mb-4" animate={{ scale: [0.8, 1] }} transition={{ duration: 0.5 }}>Tic Tac Toe</motion.h1>
      <div className="mb-2">Mode: {playerMode}</div>
      <button className="mb-4 p-2 bg-gray-700 rounded" onClick={() => setPlayerMode(playerMode === "2P" ? "AI" : "2P")}>
        Toggle {playerMode === "2P" ? "AI" : "2P"} Mode
      </button>
      <motion.div className="grid grid-cols-3 gap-2" animate={{ scale: [0.9, 1] }} transition={{ duration: 0.3 }}>
        {board.map((cell, index) => (
          <motion.div
            key={index}
            className={`w-20 h-28 flex items-center justify-center border border-gray-600 text-3xl cursor-pointer ${winningCombo.includes(index) ? "bg-green-500" : "bg-gray-800"}`}
            onClick={() => handleClick(index)}
            whileTap={{ scale: 0.9 }}
          >
            {cell}
          </motion.div>
        ))}
      </motion.div>
      {winner && <motion.h2 className="mt-4 text-xl" animate={{ scale: [0.8, 1] }} transition={{ duration: 0.5 }}>{winner === "Tie" ? "It's a Tie!" : `${winner} Wins!`}</motion.h2>}
      <button className="mt-4 p-2 bg-gray-700 rounded" onClick={restartGame}>Restart</button>
      <div className="mt-4 text-lg">Scores: X: {scores.X} | O: {scores.O} | Ties: {scores.ties}</div>
    </motion.div>
    </div>
  );
};

export default TicTacToe;