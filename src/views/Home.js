import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context/context";
const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();
  return (
    <div className="home-container">
      <button className="btn-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn-show-modal" onClick={openModal}>
        show modal
      </button>
    </div>
  );
};

export default Home;
