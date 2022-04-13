const express = require('express')
const router = express.Router()
const bCrypt = require("bcrypt")
const User = require("../models/user")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")

//get all users
router.get("/", async (req, res) => {
    const usersList = await User.find().select("-passwordHash")

    if (!usersList) {
        res.status(500).json({ success: false })
    } else {
        res.send(usersList);
    }
})


//register a new user
router.post('/register', async (req, res) => {
    const { name, email, isAdmin, phone } = req.body
    let newUser = new User({ name, email, isAdmin, phone, passwordHash: bCrypt.hashSync(req.body.password, 10) })

    newUser = await newUser.save()
    if (!newUser) {
        res.status(500).json({ msg: "can't save" })
    }
    res.status(200).json(newUser)
})

//get a single user by id
router.get("/:id", async (req, res) => {
    const id = req.params.id
    const user = await User.findById(id).select("-passwordHash").
        catch((err) => {
            return res.status(500).send(err)
        })
    if (!user) {
        return res.status(400).json({ msg: "no cat with this id" })
    } else {
        return res.status(200).json(user)
    }

})


//update user
router.put("/:id", async (req, res) => {
    const id = req.params.id
    const { name, email, isAdmin, phone } = req.body

    const userExist = await User.findById(id)
    let newPassword

    if (req.body.password) {
        newPassword = bCrypt.hashSync(req.body.password, 10)
    } else {
        newPassword = userExist.passwordHash
    }

    const user = await User.findOneAndUpdate(id, { name, email, isAdmin, phone, passwordHash: newPassword }, { new: true }).catch(err => {
        return res.status(500).send(err)
    })
    if (!user) {
        return res.status(400).json({ msg: "no user with this id" })
    } else {
        return res.status(200).json(user)
    }
})


//user login
router.post("/login", async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
        return res.status(400).json({ msg: "user not found", success: false })
    }
    if (user && bCrypt.compareSync(password, user.passwordHash)) {
        const token = jwt.sign({ userId: user.Id, isAdmin: user.isAdmin }, "process.env.TOKEN_SECRET")
        res.status(200).json({ success: true, user: user.email, token })
    } else {
        res.status(400).json({ success: false, msg: "Invalid cerdentials" })
    }
})

//get users count
router.get("/get/count", async (req, res) => {
    const userCount = await User.countDocuments()

    if (!userCount) {
        res.status(500).json({ success: false })
    } else {
        console.log({ userCount })
        res.send({ userCount });

    }

})


//delete a user by id
router.delete("/:id", (req, res) => {

    const _id = req.params.id
    if (!mongoose.isValidObjectId(_id)) {
        return res.status(400).json({ msg: "invalid Id" })
    }

    User.findOneAndDelete({ _id })
        .then((ret) => {
            if (ret) {
                return res.status(200).json({ msg: "user is found and deleted" })
            } else {
                return res.status(400).json({ msg: "user can't be found!" })
            }
        }).catch((err) => {
            return res.status(500).json({ error: err, msg: "user error" })
        })

})

module.exports = router