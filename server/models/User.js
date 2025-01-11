const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  login: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  avatar_url: {
    type: String,
    required: true,
  },
  followers_url: {
    type: String,
    required: true,
  },
  following_url: {
    type: String,
    required: true,
  },
  repos_url: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  company: {
    type: String,
  },
  blog: {
    type: String,
  },
  location: {
    type: String,
  },
  email: {
    type: String,
  },
  hireable: {
    type: Boolean,
  },
  bio: {
    type: String,
  },
  twitter_username: {
    type: String,
  },
  public_repos: {
    type: Number,
  },
  public_gists: {
    type: Number,
  },
  followers: {
    type: Number,
  },
  following: {
    type: Number,
  },
  created_at: {
    type: Date,
  },
  updated_at: {
    type: Date,
  },
  soft_delete: {
    type: Boolean,
    default: false,
  },
});


module.exports = mongoose.model("User", UserSchema);

