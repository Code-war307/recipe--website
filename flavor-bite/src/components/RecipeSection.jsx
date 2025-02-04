import { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import "./RecipeSection.css";
import data from "../temp-card-data/card_data.js";

const RecipeSection = memo(({ title }) => {
  const [randMeals, setrandMeals] = useState([]);

  useEffect(() => {
    const getRandomMeals = (data) => {
      let numOfRandMeals = 7;
      let randomMeals = [];
      let uniqueMealIds = new Set();

      while (randomMeals.length < numOfRandMeals) {
        let randomIndex = Math.floor(Math.random() * data.length);
        let randomMeal = data[randomIndex];

        if (!uniqueMealIds.has(randomMeal.idMeal)) {
          randomMeals.push(randomMeal);
          uniqueMealIds.add(randomMeal.idMeal);
        }
      }

      setrandMeals(randomMeals);
    };

    getRandomMeals(data);
  }, []);

  return (
    <div className="section">
      <h1>{title}</h1>
      <div className="taste-box">
        {randMeals.map((meal) => (
          <Card key={meal.idMeal} data={meal} showbtn={true} />
        ))}
      </div>
    </div>
  );
});
RecipeSection.displayName = "RecipeSection";

RecipeSection.propTypes = {
  title: PropTypes.string.isRequired,
};

export default RecipeSection;
