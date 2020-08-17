import React from "react";
import styles from "./recipe.module.css";
export default function Recipe({ title, calories, img, ingredients }) {
  return (
    <div className={styles.recipe}>
      <h1 className={styles.heading}>{title}</h1>
      <p className={styles.heading}>Calories:{Math.floor(calories)} kcal</p>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <img className={styles.img} src={img} alt="recipes" />
    </div>
  );
}
