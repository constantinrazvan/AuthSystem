import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes/routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/user", routes);

app.listen(8080, () => {
    console.log("Listening on 8080");
});

mongoose
    .connect("mongodb://127.0.0.1:27017", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("connected to db");
    })
    .catch((err) => {
        console.log(err);
    });







