import React from "react";
import styles from "../styles";



const ShopItem = (props) => {
    //const item = props.item;
    const {item} = props;
    return (
      <div style={styles.item} key={item.id}>
        <img style={styles.itemImage} alt={item.name} src={item.image} />
        <p style={styles.text}>{item.name}</p>
        <p style={styles.text}>{item.price} KD</p>
      </div>
    );
    
  };


  export default ShopItem;