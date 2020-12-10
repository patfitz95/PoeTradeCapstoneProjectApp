import React from 'react';
import style from '../recipe.module.css'

function Recipe({ title, ingredients, image, link }) {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>{ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}</ol>
            <img src={image} alt="" />
            <a href={link}>Instructions for the Recipe!</a>
        </div>

    );
}
export default Recipe;