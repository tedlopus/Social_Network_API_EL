const { Schema, Types, model } = require("mongoose");
const userSchema = require("./User");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: STRING,
      required: true,
      maxLength: 280,
    },
    username: {
      type: STRING,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    }
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: STRING,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: STRING,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);
  thoughtSchema.virtual('fullName').get(function() {
    return this.name.first + ' ' + this.name.last;
  });


const Thought = model("thought", thoughtSchema);

module.exports = Thought;
