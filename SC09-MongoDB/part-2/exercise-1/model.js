// Setting up the connection to MongoDB Atlas using Mongoose here
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://khoinguyen:activitiesDBpassword@activitiescluster.a2ct8s6.mongodb.net/?retryWrites=true&w=majority&appName=ActivitiesCluster')
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.log(error.message));

/** Schemas for discussion forum related collections **/
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    date: { type: Date, required: true }, // Date of account creation
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    communities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Community' }],
    admin: { type: Boolean, required: true } // True if user is an admin, False otherwise
});

const communitySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    date: { type: Date, required: true }, // Date of community creation
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }]
});

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
    image: { type: String }, // String for image url
    date: { type: Date, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

const commentSchema = new mongoose.Schema({
    text: { type: String, required: true },
    image: { type: String }, // String for image url
    date: { type: Date, required: true, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true }
});

// Retrieve from this collection to display posts on forum page
const categorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
});

const tagSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    communities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Community' }]
});

/** Other schemas for website **/
const teamMemberSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    sID: { type: String, required: true, unique: true },
    role: { type: String }
});

/** ------------------------------------------------------------------------------ **/
/** Define models **/
const User = mongoose.model('User', userSchema);
const Community = mongoose.model('Community', communitySchema);
const Post = mongoose.model('Post', postSchema);
const Comment = mongoose.model('Comment', commentSchema);
const Category = mongoose.model('Category', categorySchema);
const Tag = mongoose.model('Tag', tagSchema);
const TeamMember = mongoose.model('TeamMember', teamMemberSchema);

module.exports = {
  User,
  Community,
  Post,
  Comment,
  Category,
  Tag,
  TeamMember
};