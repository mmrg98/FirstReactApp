import React from "react";
import styles from "../styles";
import items from "../items";
import ShopItem from "./ShopItem";

const ItemsList = () => {
  const itemsList = items.map(item => (
    <ShopItem item={item} key={item.name} />
  ));
  return (
    
    <div style={styles.body}>
    
          <div style={styles.list}>{itemsList}</div>
        
    </div>
  );
};
  export default ItemsList;

  /* const ItemsList =  () => {
  const itemsList = items.map(item => (
    <ShopItem item={item} key={item.id} />
  ));
  return (
    
          <div style={styles.list}>{itemsList}</div>
      
  );
}*/