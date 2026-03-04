"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Trophy, Medal, Award } from "lucide-react"

type Difficulty = "easy" | "medium" | "hard"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  alpha: number
  color: string
}

interface LeaderboardEntry {
  name: string
  score: number
  difficulty: Difficulty
  date: string
}

interface CelebrationText {
  text: string
  alpha: number
  scale: number
  color: string
}

export default function PongGame() {
  const [gameStarted, setGameStarted] = useState(false)
  const [difficulty, setDifficulty] = useState<Difficulty>("medium")
  const [playerName, setPlayerName] = useState("")
  const [showNameInput, setShowNameInput] = useState(true)
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([])

  // Load leaderboard from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("pong-leaderboard")
    if (saved) {
      setLeaderboard(JSON.parse(saved))
    }
  }, [])

  const handleStartGame = () => {
    if (!playerName.trim()) {
      alert("Please enter your name to play!")
      return
    }
    setShowNameInput(false)
    setGameStarted(true)
  }

  const handleGameEnd = (finalScore: number) => {
    const newEntry: LeaderboardEntry = {
      name: playerName,
      score: finalScore,
      difficulty,
      date: new Date().toISOString(),
    }

    const updatedLeaderboard = [...leaderboard, newEntry]
      .sort((a, b) => b.score - a.score)
      .slice(0, 5) // Keep top 5

    setLeaderboard(updatedLeaderboard)
    localStorage.setItem("pong-leaderboard", JSON.stringify(updatedLeaderboard))
  }

  if (!gameStarted || showNameInput) {
    return (
      <section className="w-full bg-background py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl font-bold text-[#61223B] mb-8 text-center">
            Take a break: Beat the bot
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {/* Leaderboard */}
            <div className="bg-white border border-[#4d5356]/20 rounded-br-3xl overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-[#CAA258] to-[#61223B] p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Trophy className="text-white" size={28} />
                  <h3 className="text-2xl font-bold text-white">Leaderboard</h3>
                </div>
                <p className="text-white/90 text-sm font-semibold">
                  Top scores vs UCT Ikeys
                </p>
              </div>

              <div className="p-6">
                {leaderboard.length === 0 ? (
                  <p className="text-center text-[#4d5356]/60 py-8">
                    No scores yet. Be the first to play!
                  </p>
                ) : (
                  <div className="space-y-2">
                    {leaderboard.map((entry, index) => (
                      <div
                        key={index}
                        className={`flex items-center gap-3 p-3 rounded ${
                          index === 0
                            ? "bg-[#CAA258]/20 border border-[#CAA258]"
                            : index === 1
                            ? "bg-[#4d5356]/10 border border-[#4d5356]/30"
                            : index === 2
                            ? "bg-[#D22730]/10 border border-[#D22730]/30"
                            : "bg-[#4d5356]/5"
                        }`}
                      >
                        <div className="flex-shrink-0 w-8 text-center">
                          {index === 0 && <Trophy className="text-[#CAA258]" size={20} />}
                          {index === 1 && <Medal className="text-[#4d5356]" size={20} />}
                          {index === 2 && <Award className="text-[#D22730]" size={20} />}
                          {index > 2 && (
                            <span className="text-[#4d5356] font-bold text-sm">{index + 1}</span>
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-[#61223B]">{entry.name}</p>
                          <p className="text-xs text-[#4d5356]/70">
                            {entry.difficulty.charAt(0).toUpperCase() + entry.difficulty.slice(1)}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-[#61223B]">{entry.score}</p>
                          <p className="text-xs text-[#4d5356]/70">points</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Game start card */}
            <div className="bg-white border border-[#4d5356]/20 rounded-br-3xl overflow-hidden shadow-lg">
              <div className="bg-[#61223B] p-6 text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Maties vs Ikeys
                </h3>
                <p className="text-[#CAA258] text-sm sm:text-base font-semibold">
                  First to 11 points wins!
                </p>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-[#61223B]">
                    Enter your name:
                  </label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleStartGame()}
                    className="border-[#4d5356]/30 focus:border-[#61223B]"
                    maxLength={20}
                  />
                </div>

                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-[#61223B]">How to play:</h4>
                  <ul className="space-y-2 text-sm text-[#4d5356] list-disc list-inside">
                    <li>Desktop: Use arrow keys or W/S to move your paddle</li>
                    <li>Mobile: Tap top/bottom of screen to move</li>
                    <li>Press Space to pause (desktop only)</li>
                    <li>First to 11 points wins the match</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-semibold text-[#61223B]">
                    Select difficulty:
                  </label>
                  <div className="flex gap-2">
                    {(["easy", "medium", "hard"] as Difficulty[]).map((level) => (
                      <button
                        key={level}
                        onClick={() => setDifficulty(level)}
                        className={`flex-1 py-2 px-4 text-sm font-semibold rounded transition-colors ${
                          difficulty === level
                            ? "bg-[#61223B] text-white"
                            : "bg-[#4d5356]/10 text-[#4d5356] hover:bg-[#4d5356]/20"
                        }`}
                      >
                        {level.charAt(0).toUpperCase() + level.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={handleStartGame}
                  disabled={!playerName.trim()}
                  className="w-full bg-[#D22730] hover:bg-[#D22730]/90 text-white font-bold py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Start game
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <PongGameCanvas
      difficulty={difficulty}
      playerName={playerName}
      onExit={(finalScore: number) => {
        // Save score to leaderboard if player scored at least 1 point
        if (finalScore > 0) {
          handleGameEnd(finalScore)
        }
        setGameStarted(false)
        setShowNameInput(true)
      }}
      onGameEnd={handleGameEnd}
    />
  )
}

function PongGameCanvas({
  difficulty: initialDifficulty,
  playerName,
  onExit,
  onGameEnd,
}: {
  difficulty: Difficulty
  playerName: string
  onExit: (finalScore: number) => void
  onGameEnd: (score: number) => void
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [scores, setScores] = useState({ player: 0, bot: 0 })
  const [winner, setWinner] = useState<string | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [difficulty] = useState<Difficulty>(initialDifficulty)

  const gameStateRef = useRef({
    ball: { x: 400, y: 300, vx: 5, vy: 3 },
    paddle1: { y: 250 },
    paddle2: { y: 250 },
    keys: {} as Record<string, boolean>,
    particles: [] as Particle[],
    touchY: null as number | null,
    celebrationText: null as CelebrationText | null,
  })

  // AI difficulty settings
  const aiSettings = {
    easy: { speed: 3.5, accuracy: 0.6 },
    medium: { speed: 5, accuracy: 0.8 },
    hard: { speed: 7, accuracy: 0.95 },
  }

  const currentAI = aiSettings[difficulty]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const CANVAS_WIDTH = 800
    const CANVAS_HEIGHT = 600
    const PADDLE_WIDTH = 12
    const PADDLE_HEIGHT = 80
    const BALL_SIZE = 12
    const PADDLE_SPEED = 7

    const state = gameStateRef.current

    // Random ball direction at start
    const getRandomBallVelocity = () => {
      const speed = 5
      const angle = (Math.random() * 60 - 30) * (Math.PI / 180)
      const direction = Math.random() > 0.5 ? 1 : -1
      return {
        vx: Math.cos(angle) * speed * direction,
        vy: Math.sin(angle) * speed,
      }
    }

    const initialVelocity = getRandomBallVelocity()
    state.ball.vx = initialVelocity.vx
    state.ball.vy = initialVelocity.vy

    // Keyboard handlers
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === " ") {
        e.preventDefault()
        setIsPaused((prev) => !prev)
        return
      }
      state.keys[e.key] = true
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      state.keys[e.key] = false
    }

    // Touch handlers for mobile
    const handleTouchStart = (e: TouchEvent) => {
      e.preventDefault()
      const rect = canvas.getBoundingClientRect()
      const touch = e.touches[0]
      const scaleY = CANVAS_HEIGHT / rect.height
      state.touchY = (touch.clientY - rect.top) * scaleY
    }

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault()
      const rect = canvas.getBoundingClientRect()
      const touch = e.touches[0]
      const scaleY = CANVAS_HEIGHT / rect.height
      state.touchY = (touch.clientY - rect.top) * scaleY
    }

    const handleTouchEnd = () => {
      state.touchY = null
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("keyup", handleKeyUp)
    canvas.addEventListener("touchstart", handleTouchStart, { passive: false })
    canvas.addEventListener("touchmove", handleTouchMove, { passive: false })
    canvas.addEventListener("touchend", handleTouchEnd)

    // Epic celebration particles
    const spawnEpicCelebration = (team: "maties" | "ikeys") => {
      const colors = team === "maties" 
        ? ["#61223B", "#CAA258", "#FFFFFF"] 
        : ["#003D7C", "#FFD700", "#FFFFFF"]
      
      // Massive confetti explosion
      for (let i = 0; i < 100; i++) {
        const angle = (Math.random() * Math.PI * 2)
        const speed = 5 + Math.random() * 10
        state.particles.push({
          x: CANVAS_WIDTH / 2,
          y: CANVAS_HEIGHT / 2,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 5,
          size: 6 + Math.random() * 10,
          alpha: 1,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }

      // Firework bursts from sides
      const xPos = team === "maties" ? 100 : CANVAS_WIDTH - 100
      for (let burst = 0; burst < 3; burst++) {
        setTimeout(() => {
          for (let i = 0; i < 40; i++) {
            const angle = (Math.random() * Math.PI * 2)
            const speed = 3 + Math.random() * 8
            state.particles.push({
              x: xPos,
              y: 100 + burst * 200,
              vx: Math.cos(angle) * speed,
              vy: Math.sin(angle) * speed,
              size: 4 + Math.random() * 8,
              alpha: 1,
              color: colors[Math.floor(Math.random() * colors.length)],
            })
          }
        }, burst * 200)
      }

      // Celebration text
      state.celebrationText = {
        text: team === "maties" ? "MATIES SCORE! 🏆" : "IKEYS SCORE! 🦁",
        alpha: 1,
        scale: 0.3,
        color: team === "maties" ? "#61223B" : "#003D7C",
      }
    }

    // Update particles
    const updateParticles = () => {
      for (let i = state.particles.length - 1; i >= 0; i--) {
        const p = state.particles[i]
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.3 // Gravity
        p.vx *= 0.99 // Air resistance
        p.alpha -= 0.012

        if (p.alpha <= 0 || p.y > CANVAS_HEIGHT + 50) {
          state.particles.splice(i, 1)
        }
      }

      // Update celebration text
      if (state.celebrationText) {
        state.celebrationText.alpha -= 0.015
        state.celebrationText.scale = Math.min(1.2, state.celebrationText.scale + 0.04)
        
        if (state.celebrationText.alpha <= 0) {
          state.celebrationText = null
        }
      }
    }

    // Draw particles
    const drawParticles = () => {
      state.particles.forEach((p) => {
        ctx.save()
        ctx.globalAlpha = p.alpha
        ctx.fillStyle = p.color
        ctx.shadowBlur = 10
        ctx.shadowColor = p.color
        ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size)
        ctx.restore()
      })
    }

    // Draw celebration text
    const drawCelebrationText = () => {
      if (!state.celebrationText) return

      ctx.save()
      ctx.globalAlpha = state.celebrationText.alpha
      ctx.font = `bold ${50 * state.celebrationText.scale}px 'SU Raleway', sans-serif`
      ctx.textAlign = "center"
      ctx.fillStyle = state.celebrationText.color
      ctx.strokeStyle = "#FFFFFF"
      ctx.lineWidth = 6
      ctx.shadowBlur = 20
      ctx.shadowColor = state.celebrationText.color
      ctx.strokeText(state.celebrationText.text, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2)
      ctx.fillText(state.celebrationText.text, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2)
      ctx.restore()
    }

    // Game loop
    let animationId: number
    const gameLoop = () => {
      if (!isPaused) {
        // Player paddle control
        if (state.keys["ArrowUp"] || state.keys["w"] || state.keys["W"]) {
          state.paddle1.y = Math.max(
            PADDLE_HEIGHT / 2,
            state.paddle1.y - PADDLE_SPEED
          )
        }
        if (state.keys["ArrowDown"] || state.keys["s"] || state.keys["S"]) {
          state.paddle1.y = Math.min(
            CANVAS_HEIGHT - PADDLE_HEIGHT / 2,
            state.paddle1.y + PADDLE_SPEED
          )
        }

        // Touch control
        if (state.touchY !== null) {
          state.paddle1.y = Math.max(
            PADDLE_HEIGHT / 2,
            Math.min(CANVAS_HEIGHT - PADDLE_HEIGHT / 2, state.touchY)
          )
        }

        // AI paddle movement
        const targetY = state.ball.y
        const aiError = (1 - currentAI.accuracy) * 50
        const adjustedTarget = targetY + (Math.random() - 0.5) * aiError
        const diff = adjustedTarget - state.paddle2.y

        if (Math.abs(diff) > 5) {
          const moveAmount = Math.min(Math.abs(diff), currentAI.speed)
          if (diff > 0) {
            state.paddle2.y = Math.min(
              CANVAS_HEIGHT - PADDLE_HEIGHT / 2,
              state.paddle2.y + moveAmount
            )
          } else {
            state.paddle2.y = Math.max(
              PADDLE_HEIGHT / 2,
              state.paddle2.y - moveAmount
            )
          }
        }

        // Update ball
        state.ball.x += state.ball.vx
        state.ball.y += state.ball.vy

        // Ball collision with top/bottom
        if (
          state.ball.y <= BALL_SIZE / 2 ||
          state.ball.y >= CANVAS_HEIGHT - BALL_SIZE / 2
        ) {
          state.ball.vy *= -1
        }

        // Ball collision with paddles
        const paddle1X = 40
        const paddle2X = CANVAS_WIDTH - 40

        // Left paddle (player)
        if (
          state.ball.x - BALL_SIZE / 2 <= paddle1X + PADDLE_WIDTH / 2 &&
          state.ball.x >= paddle1X &&
          state.ball.y >= state.paddle1.y - PADDLE_HEIGHT / 2 &&
          state.ball.y <= state.paddle1.y + PADDLE_HEIGHT / 2
        ) {
          state.ball.vx = Math.abs(state.ball.vx) * 1.05
          const hitPos = (state.ball.y - state.paddle1.y) / (PADDLE_HEIGHT / 2)
          state.ball.vy = hitPos * 6
        }

        // Right paddle (bot)
        if (
          state.ball.x + BALL_SIZE / 2 >= paddle2X - PADDLE_WIDTH / 2 &&
          state.ball.x <= paddle2X &&
          state.ball.y >= state.paddle2.y - PADDLE_HEIGHT / 2 &&
          state.ball.y <= state.paddle2.y + PADDLE_HEIGHT / 2
        ) {
          state.ball.vx = -Math.abs(state.ball.vx) * 1.05
          const hitPos = (state.ball.y - state.paddle2.y) / (PADDLE_HEIGHT / 2)
          state.ball.vy = hitPos * 6
        }

        // Scoring
        if (state.ball.x < 0) {
          setScores((prev) => {
            const newScore = { ...prev, bot: prev.bot + 1 }
            if (newScore.bot >= 11) {
              setWinner("UCT Ikeys")
              onGameEnd(newScore.player)
            }
            return newScore
          })
          spawnEpicCelebration("ikeys")
          const newVelocity = getRandomBallVelocity()
          state.ball = {
            x: CANVAS_WIDTH / 2,
            y: CANVAS_HEIGHT / 2,
            vx: newVelocity.vx,
            vy: newVelocity.vy,
          }
        } else if (state.ball.x > CANVAS_WIDTH) {
          setScores((prev) => {
            const newScore = { ...prev, player: prev.player + 1 }
            if (newScore.player >= 11) {
              setWinner("Maties")
              onGameEnd(newScore.player)
            }
            return newScore
          })
          spawnEpicCelebration("maties")
          const newVelocity = getRandomBallVelocity()
          state.ball = {
            x: CANVAS_WIDTH / 2,
            y: CANVAS_HEIGHT / 2,
            vx: newVelocity.vx,
            vy: newVelocity.vy,
          }
        }

        updateParticles()
      }

      // Draw everything
      // Background
      ctx.fillStyle = "#000000"
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

      // Center line
      ctx.strokeStyle = "#CAA258"
      ctx.lineWidth = 2
      ctx.setLineDash([10, 10])
      ctx.beginPath()
      ctx.moveTo(CANVAS_WIDTH / 2, 0)
      ctx.lineTo(CANVAS_WIDTH / 2, CANVAS_HEIGHT)
      ctx.stroke()
      ctx.setLineDash([])

      // Team labels at top
      ctx.fillStyle = "#61223B"
      ctx.font = "bold 20px 'SU Raleway', sans-serif"
      ctx.textAlign = "center"
      ctx.fillText("MATIES", CANVAS_WIDTH / 4, 30)
      
      ctx.fillStyle = "#003D7C"
      ctx.fillText("UCT IKEYS", (CANVAS_WIDTH * 3) / 4, 30)

      // Paddles
      ctx.fillStyle = "#61223B"
      ctx.shadowBlur = 10
      ctx.shadowColor = "#61223B"
      ctx.fillRect(
        40 - PADDLE_WIDTH / 2,
        state.paddle1.y - PADDLE_HEIGHT / 2,
        PADDLE_WIDTH,
        PADDLE_HEIGHT
      )

      ctx.fillStyle = "#003D7C"
      ctx.shadowBlur = 10
      ctx.shadowColor = "#003D7C"
      ctx.fillRect(
        CANVAS_WIDTH - 40 - PADDLE_WIDTH / 2,
        state.paddle2.y - PADDLE_HEIGHT / 2,
        PADDLE_WIDTH,
        PADDLE_HEIGHT
      )
      ctx.shadowBlur = 0

      // Ball with glow
      ctx.shadowBlur = 20
      ctx.shadowColor = "#CAA258"
      ctx.fillStyle = "#CAA258"
      ctx.beginPath()
      ctx.arc(state.ball.x, state.ball.y, BALL_SIZE / 2, 0, Math.PI * 2)
      ctx.fill()
      ctx.shadowBlur = 0

      // Particles
      drawParticles()

      // Celebration text
      drawCelebrationText()

      // Scores
      ctx.fillStyle = "rgba(202, 162, 88, 0.8)"
      ctx.font = "bold 48px 'SU Raleway', sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(scores.player.toString(), CANVAS_WIDTH / 4, 80)
      ctx.fillText(scores.bot.toString(), (CANVAS_WIDTH * 3) / 4, 80)

      animationId = requestAnimationFrame(gameLoop)
    }

    gameLoop()

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("keyup", handleKeyUp)
      canvas.removeEventListener("touchstart", handleTouchStart)
      canvas.removeEventListener("touchmove", handleTouchMove)
      canvas.removeEventListener("touchend", handleTouchEnd)
      cancelAnimationFrame(animationId)
    }
  }, [difficulty, currentAI, isPaused, scores, onGameEnd])

  const handleRestart = () => {
    setScores({ player: 0, bot: 0 })
    setWinner(null)
    setIsPaused(false)
    const newVelocity = {
      vx: (Math.random() > 0.5 ? 1 : -1) * 5,
      vy: (Math.random() - 0.5) * 4,
    }
    gameStateRef.current.ball = {
      x: 400,
      y: 300,
      vx: newVelocity.vx,
      vy: newVelocity.vy,
    }
    gameStateRef.current.particles = []
    gameStateRef.current.celebrationText = null
  }

  return (
    <section className="w-full bg-[#4d5356] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center">
          {/* Scoreboard */}
          <div className="w-full max-w-[800px] bg-gradient-to-r from-[#61223B] to-[#003D7C] border-2 border-[#CAA258] rounded-br-2xl mb-4 overflow-hidden">
            <div className="flex">
              <div className="flex-1 p-4 text-center border-r border-[#CAA258]/30">
                <p className="text-xs text-[#CAA258] mb-1 font-semibold">
                  {playerName} (Maties)
                </p>
                <p className="text-3xl font-bold text-white">
                  {scores.player.toString().padStart(2, "0")}
                </p>
              </div>
              <div className="flex-1 p-4 text-center">
                <p className="text-xs text-[#FFD700] mb-1 font-semibold">UCT Ikeys</p>
                <p className="text-3xl font-bold text-white">
                  {scores.bot.toString().padStart(2, "0")}
                </p>
              </div>
            </div>
          </div>

          {/* Game canvas */}
          <div ref={containerRef} className="w-full max-w-[800px] mb-4">
            <canvas
              ref={canvasRef}
              width={800}
              height={600}
              className="w-full h-auto border-4 border-[#CAA258] rounded-br-3xl shadow-2xl"
              style={{ touchAction: "none" }}
            />
          </div>

          {/* Controls */}
          <div className="flex gap-3">
            <Button
              onClick={() => onExit(scores.player)}
              variant="outline"
              className="bg-white text-[#61223B] border-[#61223B] hover:bg-[#61223B] hover:text-white font-semibold"
            >
              Exit game
            </Button>
            <Button
              onClick={handleRestart}
              className="bg-[#D22730] hover:bg-[#D22730]/90 text-white font-semibold"
            >
              Restart
            </Button>
          </div>
        </div>
      </div>

      {/* Pause overlay */}
      {isPaused && !winner && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-white rounded-br-3xl max-w-md w-full mx-4 overflow-hidden shadow-2xl">
            <div className="bg-[#61223B] p-6 text-center">
              <h3 className="text-2xl font-bold text-white">Game paused</h3>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-center text-[#4d5356]">
                Press Space to resume or click below
              </p>
              <div className="flex gap-3">
                <Button
                  onClick={() => setIsPaused(false)}
                  className="flex-1 bg-[#D22730] hover:bg-[#D22730]/90 text-white font-semibold"
                >
                  Resume
                </Button>
                <Button
                  onClick={() => onExit(scores.player)}
                  variant="outline"
                  className="flex-1 border-[#61223B] text-[#61223B] hover:bg-[#61223B] hover:text-white font-semibold"
                >
                  Exit
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Winner modal */}
      {winner && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-white rounded-br-3xl max-w-md w-full mx-4 overflow-hidden shadow-2xl">
            <div className={`p-6 text-center ${
              winner === "Maties" 
                ? "bg-gradient-to-r from-[#61223B] to-[#CAA258]" 
                : "bg-gradient-to-r from-[#003D7C] to-[#FFD700]"
            }`}>
              <h3 className="text-3xl font-bold text-white mb-2">
                {winner === "Maties" ? "🏆 Maties win!" : "🦁 UCT Ikeys win!"}
              </h3>
              <p className="text-white font-semibold">
                Final score: {scores.player} - {scores.bot}
              </p>
              {winner === "Maties" && (
                <p className="text-white/90 text-sm mt-2">
                  Great job, {playerName}!
                </p>
              )}
            </div>
            <div className="p-6 space-y-4">
              <div className="flex gap-3">
                <Button
                  onClick={handleRestart}
                  className="flex-1 bg-[#D22730] hover:bg-[#D22730]/90 text-white font-semibold"
                >
                  Play again
                </Button>
                <Button
                  onClick={() => onExit(scores.player)}
                  variant="outline"
                  className="flex-1 border-[#61223B] text-[#61223B] hover:bg-[#61223B] hover:text-white font-semibold"
                >
                  Exit
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
