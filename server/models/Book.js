import {Schema} from 'mongoose'

const bookSchema = new Schema({
    author: [{
        type: String
    }],

    description: {
        type: String,
        required: true,
    },

    bookId: {
        type: String,
        required: true,
    },

    image: {
        type: String,
    },

    link: {
        type: String,
    },

    title: {
        type: String,
        required: true,
    },
});

module.exports = bookSchema;