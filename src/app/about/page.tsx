"use client"
import { motion } from "framer-motion"
import React from "react"

export default function AboutPage() {
  return (
    <div className="flex bg-[#131313] min-h-screen flex-col pt-5 px-7 lg:px-20 md:pt-14 md:ml-64">
      <p className="font-[100] text-6xl mb-5">bout mi</p>
      <span className="line inline-block w-[120px] h-[2px] bg-[#d3d3d3] mt-0 mb-8"></span>
      <div className="w-full grid lg:grid-cols-2 md:grid-cols-1 gap-4 mb-4">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          whileHover={{ scale: 0.99 }}
          className="card bg-black shadow-none shadow-slate-100"
        >
          <div className="card-body">
            <p className="font-light">
              a passionate Next.js developer dedicated to crafting exceptional
              web experiences. With a love for clean code and an eye for design,
              I specialize in building high-performance, server-rendered React
              applications that not only meet but exceed user expectations. My
              journey in the world of web development started with a curiosity
              for creating seamless and interactive interfaces. Over the years,
              I&rsquo;ve honed my skills in Next.js, leveraging its powerful
              features to deliver scalable and maintainable projects. What sets
              me apart is not just my technical proficiency but also my
              commitment to staying abreast of the latest industry trends. I
              thrive on tackling challenges and transforming ideas into
              pixel-perfect, responsive web applications . . .
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          whileHover={{ scale: 0.99 }}
          className="card bg-black shadow-none shadow-slate-100"
        >
          <div className="card-body">
            <p className="font-light">
              Whether it&rsquo;s optimizing performance, implementing dynamic
              routing, or ensuring a delightful user experience, I bring a
              holistic approach to Next.js development. Collaboration is at the
              core of my work philosophy, and I thrive in team environments
              where innovative ideas converge to build digital solutions that
              stand out. Let&rsquo;s join forces to create web applications that
              not only meet but exceed expectations. If you&rsquo;re seeking a
              Next.js developer with a passion for pushing the boundaries of
              what&rsquo;s possible in web development, I&rsquo;m excited to
              connect and bring your vision to life.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
