import { motion } from "framer-motion"

const spring = {
    type: "spring",
    stiffness: 180,
    damping: 30
}

const backgroundVariants = {
    initial: {
        width: "5rem",
        height: "5rem"
    },
    hover: {
        width: "12rem",
        height: "12rem"
    }
}

const textVariants = {
    initial: {
        color: "#ffffff"
    },
    hover: {
        color: "#000000"
    }
}


const Button = ({ text, event }) => {
    return (
        <motion.button
            onClick={() => { event() }}
            whileHover="hover"
            whileTap={{ y: ['2px', '0'] }}
            initial="initial"
            animate="initial"
            className="relative px-4 py-2 mt-8 overflow-hidden font-mono tracking-widest border cursor-pointer bg-zinc-900 hover:bg-transparent border-zinc-600"
        >
            <motion.span
                variants={backgroundVariants}
                transition={spring}
                className="absolute rounded-full -top-14 -left-20 z-[-1] bg-white"
            ></motion.span>

            <motion.span variants={textVariants} transition={spring}>
                {text}
            </motion.span>
        </motion.button>
    )
}

export default Button