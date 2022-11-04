import mongoose from "mongoose";

const accountSchema = mongoose.Schema ({
    email: String,
    password: String,
    repeatPassword: String,
    firstName: String,
    secondName: String,
});

const Account = mongoose.model("Account", accountSchema);

export default Account;