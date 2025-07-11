import { motion } from "framer-motion"

const AnimatedGridBackground = () => {
    return (
        <motion.div
            className="fixed top-0 left-0 z-10 w-full h-full opacity-20"
            style={{
                backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
                backgroundSize: "50px 50px",
            }}
            animate={{
                backgroundPositionX: ["0px", "50px"],
                backgroundPositionY: ["0px", "50px"],
            }}
            transition={{
                backgroundPositionX: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                },
                backgroundPositionY: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                },
            }}
        ></motion.div>
    )
}

export default AnimatedGridBackground
