import React from "react";
import './Footer.css'
const Footer = () => {
  return (
    <div className="footer">
      <div className="upper">
        <div className="recipe-cln">
            <h3>Recipes</h3>
            <ul>
              <li><a href="#">Pasta Recipe</a></li>
              <li><a href="#">Soup Recipe</a></li>
              <li><a href="#">Healthy Salad Recipe</a></li>
              <li><a href="#">Vegan Recipe</a></li>
              <li><a href="#">Dessert Recipe</a></li>
              <li><a href="#">Dinner Recipe</a></li>
              <li><a href="#">Breakfast Recipe</a></li>
              <li><a href="#">Snack Recipe</a></li>
              <li><a href="#">Side Dish Recipe</a></li>
              <li><a href="#">Instant Food Recipe</a></li>
              <li><a href="#">Lunch Recipe</a></li>
            </ul>
        </div>
        <div className="help-contact">
            <div className="contact-box">
                <div className="upp-box">
                    <h3>Contact me for help</h3>
                    <p>Get a free Tastebook of our delicious 20 recipes</p>
                </div>
                <div className="low-box">
                    <input type="text" placeholder="First Name" />
                    <input type="email" placeholder="Email" />
                    <button>Submit</button>
                </div>
            </div>
        </div>
      </div>
      <div className="lower">
        <h1>
            Flavor Bite
        </h1>
        <div className="rights">
        <p>Copyright &copy; 2025 Flavor Bite</p>
        <p>All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
