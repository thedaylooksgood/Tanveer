"use client"
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Sparkles, Star } from "lucide-react"

function Loader() {
  const [mounted, setMounted] = useState(false)
  const [positions, setPositions] = useState([])

  useEffect(() => {
    const generated = Array.from({ length: 15 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      type: Math.floor(Math.random() * 3)
    }))
    setPositions(generated)
    setMounted(true)
  }, [])

  if (!mounted) return null;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-rose-100 to-purple-100 overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {positions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Heart className="w-4 h-4 text-pink-300 opacity-50" />
          </motion.div>
        ))}
      </div>
      <div className="relative z-10 bg-white p-8 rounded-3xl shadow-xl text-center">
        <p className="text-xl font-bold text-pink-600">Loading something special...</p>
      </div>
    </div>
  )
}

export default Loader
          }}
        >
          Loading something special...
        </motion.p>

        {/* Cute emojis */}
        <div className="flex justify-center space-x-4 mt-5">
          {["🎂", "✨", "🎁", "💖", "🎈"].map((emoji, i) => (
            <motion.span
              key={i}
              className="text-xl"
              animate={{
                rotate: [-10, 10, -10],
                scale: [1, 1.2, 1],
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
            >
              {emoji}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Loader
