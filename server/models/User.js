import {Schema, model} from 'mongoose';
import bcrypt from 'bcrypt';
import bookSchema from './Book';

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must use a valid email address'],
    },

    password: {
        type: String,
        required: true,
    },

    savedBooks: [bookSchema],
},

    {
    toJSON: {
        virtuals: true,
        },
    }
);


