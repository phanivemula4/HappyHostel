const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false }, // Add this field
    username: { type: String, required: true }, // Add this field


});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
