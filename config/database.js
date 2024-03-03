const mongoose = require('mongoose');
const dotenv = require('dotenv');

const DB_NAME = "mohan";

dotenv.config({ path: "./config/config.env" });

const connectDatabase = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`);
        console.log("Database connected successfully");
        return connection;
    } catch (error) {
        console.error("Error connecting to database:", error);
        throw error;
    }
};

// Call the function to connect to the database
connectDatabase()
    .then(() => {
        console.log("Connection to database established");
    })
    .catch(error => {
        console.error("Failed to connect to database:", error);
    });

module.exports = connectDatabase;
