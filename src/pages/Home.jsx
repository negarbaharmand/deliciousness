import React from "react";
import Veggie from "../component/Veggie";
import Popular from "../component/Popular";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Veggie />
      <Popular />
    </motion.div>
  );
}

export default Home;
