const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { User } = require("./models/User");


const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 5000

mongoose.connect('mongodb+srv://terecal:1234@boilerplate-hetcl.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err))

app.get('/', (req, res) => res.send("Hello World"))

app.post('/register', (req, res) => {
    // console.log("req.body : ", req.body);
    // res.send("회원 가입 요청 완료 2222")

    console.log("req.body : ", req.body);
    const user = new User(req.body)
    console.log('====================================');
    console.log("user : ", user);
    console.log('====================================');

    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).json({
            success: true
        })
    })

});

app.listen(port, () => console.log(`Example app listing on port ${port}!`))
