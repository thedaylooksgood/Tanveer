"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Heart, Gift, Cake, Star } from "lucide-react"

function calculateTimeLeft(targetDate) {
  const difference = targetDate - new Date()
  let timeLeft = {}

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }
  return timeLeft
}

export default function Countdown({ targetDate, onCountdownEnd }) {
  // Start as null to avoid server/client mismatch
  const [timeLeft, setTimeLeft] = useState(null)

  useEffect(() => {
    // Only start the timer once the component is mounted on the phone
    setTimeLeft(calculateTimeLeft(targetDate))
    
    const timer = setInterval(() => {
      const updated = calculateTimeLeft(targetDate)
      setTimeLeft(updated)
      if (!updated || Object.keys(updated).length <= 0) {
        onCountdownEnd()
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const icons = [
    <Heart key="heart" className="text-pink-500 fill-pink-200" />,
    <Gift key="gift" className="text-purple-500" />,
    <Cake key="cake" className="text-pink-500" />,
    <Star key="star" className="text-yellow-400 fill-yellow-200" />,
  ]

  // If we haven't mounted yet, show a clean loading state
  if (!timeLeft) {
    return <div className="text-pink-600 font-bold text-xl">Loading your surprise...</div>
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-center text-pink-600 min-h-20 sm:min-h-11 mb-6"
        animate={{ scale: [0.95, 1, 0.95] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Your Special Day is Almost Here💕
      </motion.h1>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.entries(timeLeft).map(([unit, value], index) => (
          <motion.div
            key={unit}
            className="bg-white rounded-3xl shadow-lg p-4 w-24 h-24 flex flex-col items-center justify-center border-2 border-pink-200"
          >
            <div className="text-2xl font-bold text-purple-600">{value}</div>
            <div className="text-xs text-pink-500 capitalize">{unit}</div>
            <div className="mt-1">{icons[index % icons.length]}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
