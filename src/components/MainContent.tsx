"use client"
import { motion } from "framer-motion"
import React from "react"

export default function MainContent() {
  return (
    <main className="flex min-h-screen flex-col bg-[#131313] items-center px-7 lg:px-20 pt-5 md:pt-14 md:ml-64">
      <div className="mb-5">
        <h3 className="name text-6xl from-bold lowercase">
          Risoles Omah Gembul
        </h3>
        <span className="line inline-block w-[120px] h-[5px] bg-[#d3d3d3] mt-4 mb-8"></span>
        <p className="font-[100] text-4xl mb-2">Risoles Producer</p>
        <p className="font-light">
          Risoles Omah Gembul merupakan UMKM yang terinspirasi dari makanan
          rumahan dan diolah dengan resep turun temurun. Sederhana saja, kami
          ingin menghadirkan cita rasa tradisional dengan sentuhan modern,
          inilah yang membuat Risoles kami berbeda.
        </p>
      </div>
      <div className="w-full grid lg:grid-cols-2 md:grid-cols-2 gap-4 mb-4">
        <div className="w-full grid lg:grid-cols-2 md:grid-cols-1 gap-4 mb-4">
          <motion.div
            initial={{ opacity: 0, x: -110 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="card bg-black shadow-none shadow-slate-100"
          >
            <div className="card-body items-center text-center">
              <h2 className="card-title text-4xl font-light">6+</h2>
              <p className="font-light text-sm">variants</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 110 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="card bg-black shadow-none shadow-slate-100"
          >
            <div className="card-body items-center text-center">
              <h2 className="card-title text-4xl font-light">
                risoles <br />
                producer
              </h2>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 110 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="card bg-black shadow-none shadow-slate-100"
          >
            <div className="card-body items-center text-center">
              <h2 className="card-title text-4xl font-light">15+</h2>
              <p className="font-light text-sm">resellers</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 110 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="card bg-black shadow-none shadow-slate-100"
          >
            <div className="card-body items-center text-center">
              <p className="font-light text-sm">high quality </p>
              <h2 className="card-title text-4xl font-light">
                ingredients <span className="text-sm"></span>
              </h2>
            </div>
          </motion.div>
        </div>
        <div className="w-full grid lg:grid-cols-1 md:grid-cols-1 gap-4 mb-4">
          <motion.div
            initial={{ opacity: 0, x: 110 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="card bg-black shadow-none shadow-slate-100"
          >
            <div className="card-body">
              <h3 className="text-4xl font-light">as a risoles producer</h3>
              <p className="font-light">
                it is essential to focus on quality, taste, and presentation.
                Each step in the production process must be carefully executed
                to ensure that the final product meets the highest standards.
                From preparing the filling with fresh ingredients to perfectly
                wrapping it in thin crepes, attention to detail is key.
                Furthermore, innovation in flavors and textures can set your
                risoles apart in a competitive market.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
