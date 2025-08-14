import express from "express";

const App = express();

App.listen(5000, () => {
    console.log("Server started at http://localhost:5000");
});