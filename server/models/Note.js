// ===== MODEL ======
// ==================
// This is a mongoose model, we define the schema of our
// model here and create it. This file is called
// by mongoose.js! Models are SINGULAR and CAPITALIZED


let mongoose = require('mongoose');

let NoteSchema = new mongoose.Schema({
    author: String,
    body: String
},{ timestamps: true })

mongoose.model('Note', NoteSchema);