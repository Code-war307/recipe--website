import express from "express";
import cors from "cors";
import connectDB from "./db.js";
import recipe from "./models/favRecipe.js";

const app = express();
app.use(express.json());
app.use(cors());

const port = 3000;

connectDB();

app.get("/crud-recipe", async (req, res) => {
  try {
    const recipes = await recipe.find();
    return res.json(recipes);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
});

app.post("/crud-recipe", async (req, res) => {
  try {
    const { idMeal, strMeal, strMealThumb } = req.body;
    const recipes = new recipe({ idMeal, strMeal, strMealThumb });
    const savedRecipe = await recipes.save();
    res.status(201).json(savedRecipe);
  } catch (error) {
    console.error("Error saving recipe:", error);
    res.status(400).json({ error: "Invalid data" });
  }
});

app.delete("/crud-recipe/:id", async (req, res) => {
  try{
    const {recipeId} = req.params;
    await recipe.deleteOne({recipeId}); 
    res.status(200).json({ message: 'Recipe deleted successfully' });
  }
  catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
