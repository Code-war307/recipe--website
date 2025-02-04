import mongoose from "mongoose";
const recipeSchema = new mongoose.Schema({
    idMeal: Number,
    strMeal: String,
    strMealThumb: String,
})

const recipe = mongoose.model("recipe", recipeSchema)

export default recipe;