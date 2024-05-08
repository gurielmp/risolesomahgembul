"use client"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

const items = [
  {
    id: 1,
    title: "title1",
    subtitle: "subtitle1",
  },
  {
    id: 2,
    title: "title2",
    subtitle: "subtitle2",
  },
  {
    id: 3,
    title: "title3",
    subtitle: "subtitle3",
  },
]

export default function Card() {
  const [selectedId, setSelectedId] = useState(null)
  return (
    <>
      <motion.div
        className="card bg-black shadow-none shadow-slate-100"
        layoutId="card"
        onClick={() => setSelectedId(null)}
      >
        <motion.h5>subtitle</motion.h5>
        <motion.h2>title</motion.h2>
      </motion.div>
      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId="card">
            <motion.h5>subtitle</motion.h5>
            <motion.h2>title</motion.h2>
            <motion.button onClick={() => setSelectedId(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
