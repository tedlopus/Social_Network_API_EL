const { Schema, Types, model } = require('mongoose');
const thoughtSchema = require('./Thought');

const userSchema = new Schema( 
{
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        thoughts:  [{ type: Schema.Types.ObjectId, ref: 'thought'}],
        friends:  [{ type: Schema.Types.ObjectId, ref: 'user'}],
    },
    {
        toJSON: {
          getters: true,
          virtuals: true,
        },
        id: false,
    }
);

const User = model('user', userSchema);

module.exports = User;