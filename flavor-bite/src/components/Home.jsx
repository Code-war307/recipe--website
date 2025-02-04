import React from "react";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import './Home.css'
import Navbar from "./Navbar";
import Footer from "./Footer";
import RecipeSection from "./RecipeSection";
import Cllrecipe from "./Cllrecipe";
const Home = () => {
  const [search, setSearch] = useState('')

  const navigate = useNavigate();
  const searchMeal = () => {
    navigate(`/meal/${search}`);
  };
  const mealInfo = () => {
    navigate(`/mealinfo/53014`);
  };
  
  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="first-recipe-cont">
        <div className="img-text">
          <img src="https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg" alt="pizza" />
          <div className="text">
            <h2>Let&apos;s make a delicious and cheezy pizza</h2>
            <button onClick={mealInfo}>let&apos;s make</button>
          </div>
        </div>
      </div>
      <RecipeSection title={"Craving for meal"} />
      <Cllrecipe />
      <RecipeSection title={"Explore some more"} />
      <Cllrecipe />
      <div className="search">
        <input
          type="text"
          placeholder="Search for recipes..."
          onChange={handleInput}
        />
        <button onClick={searchMeal}>Search</button>
      </div>
      <Footer />
    </>
  );
};

export default Home;
