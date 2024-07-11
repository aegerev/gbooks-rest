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

userSchema.pre('save', async function (next) {
    if(this.isNew || this.isModified('password')) {
        const saltRounds = 30;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});


