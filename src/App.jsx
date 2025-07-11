import React from 'react'
import AnimatedGridBackground from './UI/animations/gridBackgroud'
import Button from './components/button'
import { motion } from 'framer-motion'

const App = () => {
  return (
    <>
      <div className='z-0 flex flex-col items-center w-full h-screen text-white bg-zinc-900'>
        <AnimatedGridBackground />

        <div className='z-20 flex flex-col items-center'>
          <p className='mt-40 font-mono text-5xl font-bold tracking-widest'>DIYRA</p>
          <p className='mt-5 font-mono tracking-tight text-center'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
            Autem eaque ut velit amet vero soluta numquam veritatis ab distinctio deleniti! Dolor eos quo quaerat veniam recusandae. <br />
            Praesentium numquam tempora est!
          </p>

          <Button text={'START'} />
        </div>

      </div>
      <motion.div
        animate={{ filter: 'hue-rotate(360deg)' }}
        transition={{
          repeat: Infinity
        }}
        className='flex flex-col items-center w-full h-screen pt-40 text-white bg-red-400'>
        <p className='font-serif text-4xl font-bold'>COMING SOON...</p>
      </motion.div>
    </>
  )
}

export default App