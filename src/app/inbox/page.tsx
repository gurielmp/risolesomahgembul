"use client"
import { motion } from "framer-motion"

export default function InboxPage() {
  return (
    <div className="flex bg-[#131313] min-h-screen flex-col pt-5 px-7 font-light lg:px-20 md:pt-14 md:ml-64 gap-1">
      <p className="font-[100] text-6xl mb-5">inbox</p>
      <span className="line inline-block w-[80px] h-[2px] bg-[#d3d3d3] mt-0 mb-8"></span>
      <div className="flex flex-col lg:w-1/2 gap-1">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="card bg-black shadow-none shadow-slate-100"
        >
          <div className="collapse collapse-arrow">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-md">Litzea</div>
            <div className="collapse-content">
              <p>Hi, how are you? My name is Litzea.</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="card bg-black shadow-none shadow-slate-100"
        >
          <div className="collapse collapse-arrow">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-md">Odolf</div>
            <div className="collapse-content">
              <p>Hi, how are you? My name is Odolf.</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="card bg-black shadow-none shadow-slate-100"
        >
          <div className="collapse collapse-arrow">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-md">Owib</div>
            <div className="collapse-content">
              <p>Hi, how are you? My name is Olivia.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
