import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { register, login } from "../set/account";

const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/registerPage", register);
app.post("/loginPage", login);

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});

mongoose
    .connect("mongodb://127.0.0.1:27017", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Database is connected succesfully!");
    })
    .catch((err) => {
        console.log(err);
    });







