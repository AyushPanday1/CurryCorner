const shopMode = require("../model/shopMode");
const { uploadFile } = require("../aws")

const createShop = async function (req, res) {
    try {
        let data = req.data
        let pic = req.file
        let uplodadPic = uploadFile(pic[0])
        data.pic = uplodadPic
        let restourant = await shopMode.create(data)
        res.status(201).send({ status: true, data: restourant })
    }
    catch (e) {
        res.status(500).send({ status: false, data: "server down" })
    }
}


const UpdateeShop = async function (req, res) {
    try {
        let data = req.data
        let pic = req.file
        let shopId = req.params.shopId

        if (pic) {
            let uplodadPic = uploadFile(pic[0])
            data.pic = uplodadPic
        }
        let restourant = await shopMode.findOneAndUpdate({ shopId: shopId }, { data: data })
        res.status(201).send({ status: true, data: restourant })
    }
    catch (e) {
        res.status(500).send({ status: false, data: "server down" })
    }
}

module.exports = { createShop, UpdateeShop }