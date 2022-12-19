import React, { useContext, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Slider from "../../components/Slider";
import { AuthContext } from "../../contexts/AuthProvider";
import Login from "../login/Login";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useContext(AuthContext);
  return (
    <>
      <Header setIsModalOpen={setIsModalOpen} />
      {user ? <Slider /> : <div className="h-[300px] bg-black"></div>}

      <Footer />
      <Login isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default Home;
