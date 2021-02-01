const express = require('express')
const router = express.Router()
const User = require('../models/user')

//@path : /api/users
//@Desc : Get Users
//@Access:public

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json({ msg: "All users", users })
    } catch (error) {
        console.log(error)
    }
});

//@path : /api/users/add
//@Desc : Add a new User
//@Access:public

router.post("/add", async (req, res) => {
    const { firstName, lastName, email } = req.body

    try {
        const newUser = new User({
            firstName, lastName, email
        })
        const user = await newUser.save()
        res.json({ msg: 'User Added... ', user })

    } catch (error) {
        console.log(error)
    }
})

//@path : /api/users/update
//@Desc : update a User
//@Access:public

router.put("/update/:id", async (req, res) => {
    const { id } = req.params
    try {
        const user = await User.findOneAndUpdate({ _id: id }, { new: true }, { $set: req.body })
        res.json({ msg: 'User Updated', user })

    } catch (error) {
        console.log(error)
    }
})

//@path : /api/users/remove
//@Desc : remove a User
//@Access:public

router.delete("/remove/:id", async (req, res) => {
    const { id } = req.params
    try {
        const user = await User.findOneAndRemove({ _id: id })
        res.json({ msg: 'User Deleted...', user })

    } catch (error) {
        console.log(error)
    }
})
module.exports = router;

