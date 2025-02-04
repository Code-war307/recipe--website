import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Mealinfo.css";
import './Meal.css'
const Mealinfo = () => {
  const { id } = useParams();
  const [info, setInfo] = useState({});
  const [ingredientsData, setIngredientsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchInfo = async () => {
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (!data.meals) {
        setInfo(null);
        setErrorMessage("No meals found. Please check your search query.");
      } else {
        setInfo(data.meals[0]);
      }
    } catch (error) {
      console.error("Error fetching meal data:", error.message);
      setErrorMessage("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const fetchIngredients = (info) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = info[`strIngredient${i}`];
      const measure = info[`strMeasure${i}`];

      if (ingredient && measure) {
        ingredients.push(`${ingredient} (${measure})`);
      }
    }

    setIngredientsData(ingredients);
  };

  useEffect(() => {
    fetchInfo();
  }, [id]);

  useEffect(() => {
    if (info && Object.keys(info).length > 0) {
      fetchIngredients(info);
    }
  }, [info]);

  return (
    <>
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
        <div className="meal-info">
          <div className="heading">
            <h1>{info.strMeal + ` (${info.strArea})`}</h1>
          </div>
          <div className="img-desc">
            <div className="image-name">
              <div className="image">
                <img src={info.strMealThumb} alt="" />
              </div>
              <div className="name">
                <p>{info.strCategory}</p>
              </div>
            </div>
            <div className="desc">
              <p>{info.strInstructions}</p>
            </div>
          </div>
          <div className="ingredients">
            <ul>
                <h2>Ingredients</h2>
              {ingredientsData.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Mealinfo;


//strYoutube
