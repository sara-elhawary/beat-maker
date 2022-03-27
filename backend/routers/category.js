
const express = require("express")
const router = express.Router()
const Category = require('../models/category')

router.get('/', async (req, res) => {
    const categoriesList = await Category.find()

    if (categoriesList.length == 0) {
        res.status(501).json({ message: "no cats yet" })
    } else {
        res.status(200).json(categoriesList)
    }
})

router.post('/', async (req, res) => {
    const { name } = req.body
    const newCat = new Category({ name })

    newCat.save()
    if (!newCat) {
        res.status(500).json({ msg: "can't save" })
    }
    res.status(200).json(newCat)
})

router.delete("/:id", (req, res) => {
    const _id = req.params.id

    Category.findOneAndDelete({ _id })
        .then((ret) => {
            if (ret) {
                return res.status(200).json({ msg: "cat is found and deleted" })
            } else {
                return res.status(400).json({ msg: "cat can't be found!" })
            }
        }).catch((err) => {
            return res.status(500).json({ error: err, msg: "Cat error" })
        })

})

router.get("/:id", async (req, res) => {
    const id = req.params.id
    const cat = await Category.findById(id).
        catch((err) => {
            return res.status(500).send(err)
        })
    if (!cat) {
        return res.status(400).json({ msg: "no cat with this id" })
    } else {
        return res.status(200).json(cat)
    }

})


router.put("/:id", async (req, res) => {
    const id = req.params.id
    const { name } = req.body
    const cat = await Category.findOneAndUpdate(id, { name, }, { new: true }).catch(err => {
        return res.status(500).send(err)
    })
    if (!cat) {
        return res.status(400).json({ msg: "no cat with this id" })
    } else {
        return res.status(200).json(cat)
    }
})




module.exports = router