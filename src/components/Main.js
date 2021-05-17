import React, { useState, useEffect } from "react";
import styles from "./Main.module.css";
import LeftSign from "../images/leftButtonSign.png";
import RightSign from "../images/rightButtonSign.png";

export const Main = () => {
  const [title, setTitle] = useState(false);
  const [cloudEmerge, setCloudEmerge] = useState(false);
  const [text, setText] = useState(false);
  const [buttons, setButtons] = useState(false);
  const [buttonsText, setButtonsText] = useState(false);
  useEffect(() => {
    window.addEventListener("wheel", function (event) {
      if (event.deltaY > 0) {
        setTimeout(function () {
          window.scrollTo(0, 0);
          setTitle(true);
        }, 2000);
        setTimeout(function () {
          setCloudEmerge(true);
        }, 4000);
        setTimeout(function () {
          setText(true);
        }, 6000);
        setTimeout(function () {
          setButtons(true);
        }, 8000);
        setTimeout(function () {
          setButtonsText(true);
        }, 12000);
        setTimeout(function () {
          window.scrollTo(0, 8000);
        }, 14000);
      } else {
        setTimeout(function () {
          setButtonsText(false);
        }, 2000);
        setTimeout(function () {
          setButtons(false);
        }, 4000);
        setTimeout(function () {
          setText(false);
        }, 6000);
        setTimeout(function () {
          setCloudEmerge(false);
        }, 8000);
        setTimeout(function () {
          setTitle(false);
        }, 12000);
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={title ? styles.title : styles.title2}></div>
      <div className={cloudEmerge ? styles.cloud : styles.cloud2}>
        <div className={text ? styles.innerBlock : styles.innerBlock2}>
          <p className={styles.textBodyOne}>
            Уже зарегистрированы на <span className={styles.start}>Start</span>?
          </p>
          <p className={styles.textBodyTwo}>
            Войдите, а мы покажем насколько хорошо мы вас знаем
          </p>
        </div>
      </div>
      <div className={buttons ? styles.buttonsBlock : styles.buttonsBlock2}>
        <div className={buttons ? styles.btn : styles.notBtns}>
          <img src={LeftSign} className={styles.sign} alt="left" />
          <p className={buttonsText ? styles.btnText : styles.notBtn}>
            Авторизоваться
          </p>
        </div>
        <div className={buttons ? styles.btn2 : styles.notBtns}>
          <img src={RightSign} className={styles.sign} alt="right" />
          <p className={buttonsText ? styles.btnText : styles.notBtn}>
            Продолжить без авторизации
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
