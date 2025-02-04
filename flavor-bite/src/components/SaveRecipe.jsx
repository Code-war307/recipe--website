import { useState, useEffect} from "react";
import "./Meal.css";
import Card from "./Card";
import Navbar from "./Navbar";

const SaveRecipe = () => {
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    const fetchRecipe = async () => {
      setLoading(true);
      setErrorMessage("");

      try {
        const response = await fetch("http://localhost:3000/crud-recipe");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        setErrorMessage(`Failed to load recipes: ${error.message}`);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, []);

  const handleDeleteRecipe = (recipeId) => {
    const updatedRecipes = recipe.filter((recipe) => recipe.idMeal !== recipeId);
    setRecipe(updatedRecipes);
  };

  return (
      <div>
        <Navbar />
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
              <h1>Your Saved Recipes</h1>
            </div>
            <div className="meal-list">
              {recipe.length > 0 ? (
                recipe.map((item) => (
                  <Card
                    key={item.idMeal}
                    data={item}
                    showbtn={false}
                    onDelete={() => handleDeleteRecipe(item.idMeal)}
                  />
                ))
              ) : (
                <p>No meals found for your search.</p>
              )}
            </div>
          </div>
        )}
      </div>
  );
};

export default SaveRecipe;
