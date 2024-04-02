import React from "react";
import { motion } from "framer-motion";
const Listing = ({ data , open }) => {
  
  return (
    <motion.div className="listing" onClick={open} whileHover={{ scale: 1.1 }}>
      <div className="listing__content">
        <div className="listing__image-container">
          <img
            className="listing__image"
            alt="image"
            src={data.images}
          />
        </div>
        <div className="listing__details">
          
          <div className="listing__row">
            <span className="listing__price">{data.name}</span>
          </div>
          <div className="listing__row">
            <span className="listing__address">{data.content}</span>
          </div>
          
        </div>
      </div>
    </motion.div>
  );
};

export default Listing;
