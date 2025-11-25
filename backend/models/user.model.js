const mongoose = require('mongoose');
const validator = require('validator');


let userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "kindly enter your first name"],
        },
        last: {
            type: String,
            required: [true, "kindly enter your first name"],
        },
        email: {
            type: String,
            required: [true, "kindly enter your first name"],
            unique: [true],
            trim: true,
            validate: {
                validator: (v) => validator.isEmail(v),
                message: "Invalid email format"
            },

        }
    }
)