const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true
});



// const me = new User({
//     name: 'Alaaeldin',
//     age: 20
// });

// me.save().then((result) => {
//     console.log(me);
// }).catch((error) => {
//     console.log(error);
// });



// const task = new Task({
//     description: "Clean Your Desk",
//     completed: false
// });

// const user = new User({
//     name: 'Aladdin',
//     age:20,
//     email: 'alaaMarzouk000@gmail.com',
//     password: '07775'
// })

// user.save().then(() => {
//     console.log(user);
// }).catch((error) => {
//     console.log(error);
// });

// task.save().then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });