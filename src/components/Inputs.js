import React, { useState } from "react";

const Input = () => {
  // Используем хук useState для управления состоянием компонента
  const [hellotext, setHellotext] = useState("Hello Worldiiun");
  const [userData, setUserData] = useState("Your text");

  // Функция handleClick вызывается при клике на input
  const handleClick = () => {
    // Обновляем состояние hellotext
    setHellotext("Hello Worlddd");
    alert("hello");
  };

  return (
    <div>
      {/* Отображаем текущее значение hellotext */}
      <h1>{hellotext}</h1>
      {/* Отображаем текущее значение userData */}
      <h2>{userData}</h2>
      <input
        type="text"
        // Обновляем состояние userData при изменении текста в input
        onChange={(event) => setUserData(event.target.value)}
        placeholder={hellotext}
        onClick={handleClick}
        onMouseOver={() => console.log("mouse over")}
      />
    </div>
  );
};

export default Input;
