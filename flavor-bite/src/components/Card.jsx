import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./Card.css";
import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = ({ data, showbtn, onDelete }) => {

  const saveRecipe = async () => {
    try {
      const response = await fetch("http://localhost:3000/crud-recipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idMeal: data.idMeal,
          strMeal: data.strMeal,
          strMealThumb: data.strMealThumb,
        }),
      });
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);

      await response.json();
      toast.success("Recipe added successfully!", {
        className: "custom-toast",
      });
    } catch (e) {
      console.error(e);
      toast.error("Failed to add recipe!", {
        className: "custom-toast",
      });
    }
  };

  const delRecipe = async () => {
    try{
      const response = await fetch(`http://localhost:3000/crud-recipe/${data.idMeal}`, {method : "DELETE"});
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      toast.success("Recipe deleted successfully!", {
        className: "custom-toast",
      });
      onDelete(data.idMeal);
    }
    catch(e){
      console.error(e);
      toast.error("Failed to delete recipe!", {
        className: "custom-toast",
      });
    }
  }

  const handlePropagation = (event) => {
    event.preventDefault(); // Prevents NavLink's navigation
    event.stopPropagation();
    if(showbtn){
      saveRecipe();
    } 
    else{
      delRecipe();
    }
  };

  return (
    <>
      <NavLink
        to={`/mealinfo/${data.idMeal}`}
        className="navlink"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="card">
          <div className="card-img">
            <img src={data.strMealThumb} alt="Meal" />
          </div>
          <div className="card-cnt">
            <p className="title">{data.strMeal}</p>
          </div>
          <div className="button">
            <button onClick={handlePropagation}>
              {showbtn ? <i className="fa-solid fa-plus"></i> : <i className="fa-solid fa-trash"></i>}
            </button>
          </div>
        </div>
      </NavLink>
    </>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    strMealThumb: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
    idMeal: PropTypes.string.isRequired,
  }).isRequired,
  showbtn: PropTypes.bool,
  onDelete: PropTypes.func.isRequired,
};

export default Card;
