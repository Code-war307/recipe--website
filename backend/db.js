import mongoose from "mongoose";
const connectDB = async() => {
    try{
        let connection = await mongoose.connect(); // write the database connection url here
        console.log("connection is established");
    }
    catch(e){
        console.error(e);
    }
}

export default connectDB;
