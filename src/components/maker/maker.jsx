import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";
const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "April",
      company: "Voithru",
      theme: "light",
      title: "Frontend Developer",
      email: "yeon19april@gmail.com",
      message: "go for it",
      fileName: "april",
      fileURL: "test",
    },
    {
      id: "2",
      name: "April2",
      company: "Voithru",
      theme: "light",
      title: "Frontend Developer",
      email: "yeon19april@gmail.com",
      message: "go for it",
      fileName: "april",
      fileURL: "test",
    },
    {
      id: "3",
      name: "April3",
      company: "Voithru",
      theme: "light",
      title: "Frontend Developer",
      email: "yeon19april@gmail.com",
      message: "go for it",
      fileName: "april",
      fileURL: "test",
    },
  ]);
  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
