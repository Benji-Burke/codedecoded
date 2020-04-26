// // Dependencies
// const express = require('express');
// const app = express();

// // listen for when someone goes to
// // localhost:3000/
// // upon getting a request at that URL
// // send text 'Hello World'

// // Routes
// app.get('/', (req, res) => {
//   console.log("Oh hey! I got a request. Let me respond with something");
//   res.send('Hello World! Website coming soon');
// });

// app.get('/somedata', (request, response)=>{
//   // console.log('response: ', response);
//   // console.log('===================');
//   response.send('here is your information');
// });

// // App Listen
// app.listen(3000, ()=> {
//   console.log("I am listening for requests!!!");
// });

// Dependencies 
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const methodOverride = require('method-override');
const session = require('express-session');
const bcrypt = require('bcrypt');

//middleware
app.use(express.urlencoded({extended: true}))

app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({
    secret: "cookie_secret",
    resave: true,
    saveUninitialized: true
}));




//html
app.use(express.static('public'))


//Data
//post 
const PostController = require('./controllers/posts.js');
app.use('/blogs', PostController)

//post codes
const CodeController = require('./controllers/codes.js');
app.use('/code', CodeController);

//log in
const sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);

//create user
const usersController = require('./controllers/users.js');
app.use('/users', usersController);


// Routes
//localhost: 3000

app.get('/', (req, res) =>{
    res.redirect('/blogs')

  
});


//port
const PORT =process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/blog'
// Connect to Mongo
mongoose.connect(MONGODB_URI, { useNewUrlParser: true,
useUnifiedTopology: true},() =>{
    console.log('we are connected YO')
});

  
        
        app.listen(PORT, () => {
            console.log('listening on ', PORT);
});