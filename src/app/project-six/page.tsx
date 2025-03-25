"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const GRID_SIZE = 20;
const CANVAS_SIZE = 400;
const INITIAL_POSITION = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 0, y: -1 };

export default function SnakeGame() {
  const [snake, setSnake] = useState(INITIAL_POSITION);
  const [food, setFood] = useState(generateFood());
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [running, setRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);

  function generateFood() {
    return {
      x: Math.floor(Math.random() * (CANVAS_SIZE / GRID_SIZE)),
      y: Math.floor(Math.random() * (CANVAS_SIZE / GRID_SIZE)),
    };
  }

  function handleKeyPress(e: KeyboardEvent) {
    if (!running) return;
    const newDirection = getDirectionFromKey(e.key);
    if (newDirection) setDirection(newDirection);
  }

  function getDirectionFromKey(key: string) {
    switch (key) {
      case "ArrowUp": return direction.y === 1 ? direction : { x: 0, y: -1 };
      case "ArrowDown": return direction.y === -1 ? direction : { x: 0, y: 1 };
      case "ArrowLeft": return direction.x === 1 ? direction : { x: -1, y: 0 };
      case "ArrowRight": return direction.x === -1 ? direction : { x: 1, y: 0 };
      default: return null;
    }
  }

  function handleTouchStart(e: React.TouchEvent) {
    setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  }

  function handleTouchMove(e: React.TouchEvent) {
    if (!touchStart || !running) return;
    const dx = e.touches[0].clientX - touchStart.x;
    const dy = e.touches[0].clientY - touchStart.y;

    if (Math.abs(dx) > Math.abs(dy)) {
      setDirection(dx > 0 ? (direction.x === -1 ? direction : { x: 1, y: 0 }) : (direction.x === 1 ? direction : { x: -1, y: 0 }));
    } else {
      setDirection(dy > 0 ? (direction.y === -1 ? direction : { x: 0, y: 1 }) : (direction.y === 1 ? direction : { x: 0, y: -1 }));
    }

    setTouchStart(null);
  }

  function updateGame() {
    if (!running) return;
    const newSnake = [...snake];
    let newHead = { x: newSnake[0].x + direction.x, y: newSnake[0].y + direction.y };

    // Wrap around when hitting walls
    newHead.x = (newHead.x + CANVAS_SIZE / GRID_SIZE) % (CANVAS_SIZE / GRID_SIZE);
    newHead.y = (newHead.y + CANVAS_SIZE / GRID_SIZE) % (CANVAS_SIZE / GRID_SIZE);

    // Game Over if snake hits itself
    if (newSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
      setGameOver(true);
      setRunning(false);
      return;
    }

    newSnake.unshift(newHead);
    if (newHead.x === food.x && newHead.y === food.y) {
      setFood(generateFood()); // Generate new food
    } else {
      newSnake.pop(); // Remove last segment if no food eaten
    }

    setSnake(newSnake);
  }

  function startGame() {
    setSnake(INITIAL_POSITION);
    setDirection(INITIAL_DIRECTION);
    setFood(generateFood());
    setRunning(true);
    setGameOver(false);
  }

  useEffect(() => {
    const interval = setInterval(updateGame, 150);
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      clearInterval(interval);
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
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
      <h1 className="text-4xl font-bold mb-4">🐍 Snake Game 🍎</h1>
      <div
        className="relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {/* Game Canvas */}
        <div
          className="relative border-4 border-white"
          style={{ width: CANVAS_SIZE, height: CANVAS_SIZE }}
        >
          {/* Snake */}
          {snake.map((segment, index) => (
            <div
              key={index}
              className="absolute"
              style={{
                width: GRID_SIZE,
                height: GRID_SIZE,
                top: segment.y * GRID_SIZE,
                left: segment.x * GRID_SIZE,
                borderRadius: "5px",
                backgroundColor: index === 0 ? "yellow" : "green", // Head is yellow, body is green
              }}
            />
          ))}
          {/* Food (Apple) */}
          <div
            className="absolute bg-red-500"
            style={{
              width: GRID_SIZE,
              height: GRID_SIZE,
              top: food.y * GRID_SIZE,
              left: food.x * GRID_SIZE,
              borderRadius: "50%",
            }}
          />
        </div>
      </div>

      {/* Game Controls */}
      {gameOver && <p className="text-red-500 text-xl mt-4">Game Over! 🚨</p>}
      <button
        onClick={startGame}
        className="bg-blue-500 px-6 py-2 rounded-lg mt-4 text-lg font-semibold hover:bg-blue-600"
      >
        {running ? "Restart" : "Start Game"}
      </button>
    </div>
  );
}
