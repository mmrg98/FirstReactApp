import React from "react";
import styles from "./styles";
import ItemsList from "./components/ItemsList.js"

function App() {
  return (
    
    <div style={styles.body}>
      <header style={styles.body}>
        <img
          src="https://www.clipartmax.com/png/small/280-2809042_aesthetic-monkey-emoji-emojiedit-flower-flowercrown-flower-crown-monkey-emoji.png"
          alt="logo"
        />
        <a href="https://www.github.com/mmrg98">Mariam's GitHub</a>
        <div style={styles.body}>
          <h1 style={styles.text}>items and Beyond</h1>
          <h4 style={styles.text}>Where item maniacs gather</h4>
          <img
            alt="item shop"
            src="https://i.pinimg.com/originals/8f/cf/71/8fcf719bce331fe39d7e31ebf07349f3.jpg"
            style={styles.shopImage}
          />
          <ItemsList/>
        </div>
      </header>
    </div>
  );
}

export default App;
