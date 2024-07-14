
import mongoose from 'mongoose';
const { Schema } = mongoose;

const bookschema = new Schema({
    title: { type: String, require: true },
    content: { type: String, require: true },
    author: { type: String, require: true },
    publishedDate: { type: Date, default: Date.now }

    // date: { type: Date, default: Date.now },

},{versionKey:false , timestamps:true});

export  const bookmodel = mongoose.models.bookmodel || mongoose.model('book', bookschema);
