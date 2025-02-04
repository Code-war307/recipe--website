import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";
import "./Meal.css";

const Meal = () => {
  const { name } = useParams();
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setErrorMessage("");

      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (!data.meals) {
          setFood([]);
          setErrorMessage("No meals found. Please check your search query.");
        } else {
          setFood(data.meals);
        }
      } catch (error) {
        console.error("Error fetching meal data:", error.message);
        setErrorMessage("Something went wrong. Please try again later.");
      } finally {
        setLoading(false);
        console.log(food)
      }
    };

    fetchData();
  }, [name]);

  return (
    <div>
      {loading ? (
        <div className="loader-cont">
          <div className="loader"></div>
        </div>
      ) : errorMessage ? (
        <div className="no-meals-animation">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="9" y1="9" x2="15" y2="15" />
            <line x1="15" y1="9" x2="9" y2="15" />
          </svg>
          <h3>{errorMessage}</h3>
        </div>
      ) : (
        <div className="meal-cont">
          <div className="text">
            <h1>Your searched meal</h1>
          </div>
          <div className="meal-list">
            {food.length > 0 ? (
              food.map((item) => <Card key={item.idMeal} data={item} showbtn={true}/>)
            ) : (
              <p>No meals found for your search.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Meal;
