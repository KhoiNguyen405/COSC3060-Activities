// Setting up the connection to MongoDB Atlas using Mongoose here
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://khoinguyen:activitiesDBpassword@activitiescluster.a2ct8s6.mongodb.net/?retryWrites=true&w=majority&appName=ActivitiesCluster')
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.log(error.message));

//  Implement the Schema in Mongoose
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
});

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }]
});

const commentSchema = new mongoose.Schema({
    content: { type: String, required: true, required: true },
    date: { type: Date, required: true, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true }
});

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
});

const tagSchema = new mongoose.Schema({
    name: { type: String, required: true },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
});


