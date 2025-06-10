const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    mobileno: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    collegename: {
        type: String,
        required: true,
    },
    jan: {
        type: Number,
        required: true,
        default: 0,
        min: 0, // Minimum value for the amount (0 or higher)
    max: 3500,
    },
    feb: {
        type: Number,
        required: true,
        default: 0,
        min: 0, // Minimum value for the amount (0 or higher)
    max: 3500,
    },
    mar: {
        type: Number,
        required: true,
        default: 0,
        min: 0, // Minimum value for the amount (0 or higher)
    max: 3500,
    },
    apr: {
        type: Number,
        required: true,
        default: 0,
        min: 0, // Minimum value for the amount (0 or higher)
    max: 3500,
    },
    may: {
        type: Number,
        required: true,
        default: 0,
        min: 0, // Minimum value for the amount (0 or higher)
    max: 3500,
    },
    jun: {
        type: Number,
        required: true,
        default: 0,
        min: 0, // Minimum value for the amount (0 or higher)
    max: 3500,
    },
    jul: {
        type: Number,
        required: true,
        default: 0,
        min: 0, // Minimum value for the amount (0 or higher)
    max: 3500,
    },
    aug: {
        type: Number,
        required: true,
        default: 0,
        min: 0, // Minimum value for the amount (0 or higher)
    max: 3500,
    },
    sep: {
        type: Number,
        required: true,
        default: 0,
        min: 0, // Minimum value for the amount (0 or higher)
    max: 3500,
    },
    oct: {
        type: Number,
        required: true,
        default: 0,
        min: 0, // Minimum value for the amount (0 or higher)
    max: 3500,
    },
    nov: {
        type: Number,
        required: true,
        default: 0,
        min: 0, // Minimum value for the amount (0 or higher)
    max: 3500,
    },
    dec: {
        type: Number,
        required: true,
        default: 0,
        min: 0, // Minimum value for the amount (0 or higher)
    max: 3500,
    },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
