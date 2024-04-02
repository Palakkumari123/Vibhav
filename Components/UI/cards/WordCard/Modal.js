import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Modal = ({data , close }) => {
  
  const data1 = {
    name: "Electrovision",
    content: "Hey ECE geeks come and test your knowledge in this fun event.",
    images: "/Assets/Events/electrovision.webp",
    round1head: "• Round 1: Website Based Game",
    round2head: "• Round 2: Circuit Designing",
    round3head: "• Round 3: PC Building",
    round4head: "• Tie Breaker: Logic Based Puzzle",
    round1:
      "A binary number based game that would be available on Vibhav's official website to play.",
    round2:
      "Participants will have to design circuits with the help of given logic gates to get the required outputs.",
    round3:
      "In this round, participants have to build a PC from scratch with a simulator.",
    round4: "A logic based puzzle will be given to solve.",
  };

  const modalVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
    closed: { opacity: 0 },
  };

  const imageVariants = {
    open: { opacity: 1, y: "0vh" },
    closed: { opacity: 0, y: "-10vh" },
  };

  const modalInfoVariants = {
    open: { opacity: 1, transition: { staggerChildren: 0.2 } },
    closed: { opacity: 0 },
  };

  const modalRowVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "10%" },
  };

  return (
    <motion.div
      className="modal"
      variants={modalVariants}
      onClick={(e) => e.stopPropagation()}
    >
      
      <motion.div className="modal__info" variants={modalInfoVariants}>
        <motion.div className="modal__row" variants={modalRowVariants}>
          <span className="modal__price ">{data.name}</span>
        </motion.div>
        <motion.div
          className="modal__description-wrapper"
          variants={modalRowVariants}
        >
          <h3 className="text-2xl font-sans">{data.round1head}</h3>
          <p>{data.round1}</p>
          <br />
          <h3 className="text-2xl font-sans">{data.round2head}</h3>
          <p>{data.round2}</p>
          <br />
          <h3 className="text-2xl font-sans">{data.round3head}</h3>
          <p>{data.round3}</p>
          <br />
          <h3 className="text-2xl font-sans">{data.round4head}</h3>
          <p>{data.round4}</p>
          
        </motion.div>
        <motion.button
          className="modal__close-wrapper"
          whileHover={{ scale: 1.2 }}
          onClick={close}
        >
          <IoCloseCircleOutline className="modal__close-icon" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
