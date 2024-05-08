"use client"
import { useState } from "react"
import { logIn, logOut, toggleModerator } from "@/redux/features/auth-slice"
import { useDispatch } from "react-redux"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { motion } from "framer-motion"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const dispatch = useDispatch<AppDispatch>()

  const onClickLogin = () => {
    if (username.length >= 3) {
      dispatch(logIn(username))
      setUsername("")
    } else {
      alert("Username must be at least 3 characters long")
    }
  }

  const onClickLogout = () => {
    dispatch(logOut())
  }

  // const onClickToggle = () => {
  //   dispatch(toggleModerator())
  // }

  return (
    <div>
      <div className="flex bg-[#131313] min-h-screen flex-col pt-5 px-7 lg:px-20 md:pt-14 md:ml-64">
        <p className="font-[100] text-6xl mb-5">sign-in</p>
        <span className="line inline-block w-[90px] h-[2px] bg-[#d3d3d3] mt-0 mb-8"></span>
        <div>
          {useAppSelector((state) => !state.authReducer.value.isAuth) && (
            <input
              type="text"
              maxLength={9}
              placeholder="Type your name here"
              className="input input-bordered w-full max-w-xs placeholder:font-light"
              onChange={(e) => setUsername(e.target.value)}
            />
          )}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="grid grid-cols-2 gap-2 max-w-xs"
          >
            {useAppSelector((state) => !state.authReducer.value.isAuth) && (
              <button
                onClick={onClickLogin}
                className="flex flex-col btn normal-case font-light mt-4"
              >
                log in
              </button>
            )}
            {useAppSelector((state) => state.authReducer.value.isAuth) && (
              <button
                onClick={onClickLogout}
                className="flex flex-col btn normal-case font-light mt-4"
              >
                log out
              </button>
            )}
          </motion.div>
          {/* <button onClick={onClickToggle} className="flex flex-col btn mt-4">
            toggle moderator
          </button> */}
        </div>
      </div>
    </div>
  )
}
