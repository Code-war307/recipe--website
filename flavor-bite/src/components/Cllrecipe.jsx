import React, { useState, useEffect, useRef, memo} from "react";
import Clcard from "./Clcard";
import "./Cllrecipe.css";

const Cllrecipe = memo(function Cllrecipe() {
  const [mealcate, setmealcate] = useState([]);
  const mealDataRef = useRef(null);

  // Fetch meal category data
  const mealCategoryData = async () => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setmealcate(data.categories);
      mealDataRef.current = data.categories;
    } catch (error) {
      console.error("Error fetching meal category data:", error.message);
    }
  };

  // Initialize meal categories on component mount
  useEffect(() => {
    mealCategoryData();
  }, []);

  // Function to generate unique random indices
  const getUniqueRandomIndices = (length, count) => {
    const usedIndices = new Set();
    while (usedIndices.size < count) {
      const randomIdx = Math.floor(Math.random() * length);
      if (randomIdx != 0) usedIndices.add(randomIdx);
    }
    return Array.from(usedIndices);
  };

  return (
    
      <div className="cllrecipe-container">
      <div className="cllrecipe-grid">
        {/* Render only if mealcate is not empty */}
        {mealcate.length > 0 &&
          getUniqueRandomIndices(mealcate.length, 3).map((randomIndex) => (
            <Clcard key={randomIndex} category={mealcate[randomIndex]} />
          ))}
      </div>
    </div>
  );
});

Cllrecipe.displayName = "Cllrecipe";

export default Cllrecipe;
