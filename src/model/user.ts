import moongoose from "mongoose";
//import bcrypt from "bcrypt";

enum Identity {
    CaseCreator = "case_creator",
    CaseReviewer = "case_reviewer"
}

const userSchema = new moongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    identity:{
        type: Identity, 
        required:true
    }
});

