const comentModel = require("../model/comment")
const axios = require('axios');


const newComment = async function (req, res) {
    try {
        let data = req.body
        data.date = new Date().toISOString().split('T')[0];
        const comment = await comentModel.create(data)
        res.status(200).send({ data: comment })
    } catch (e) {
        res.status(500).send({ status: false, data: e.message })
    }
}


const getComments = async function (req, res) {
    try {
        const comments = await comentModel.find({ productId: req.params.prouctId, isDeleted: false });

        res.status(200).send({ data: comments })
    } catch (e) {
        res.status(500).send({ status: false, data: e.message })
    }
}

const deleteComment = async function (req, res) {
    try {
        await comentModel.findByIdAndUpdate({ _id: req.params.id }, { isDeleted: true })

        res.status(200).send({ data: 'comment deleted successfully' });
    } catch (e) {
        res.status(500).send({ status: false, data: e.message })
    }
}

const location = async function (req, res) {
    let data = await axios.get(`https://api.ipify.org/?format=json`)
    let location = await axios.get(`https://www.iplocate.io/api/lookup/${data.data.ip}`)

    // console.log(data.data)

    res.send({ data: location.data })

}

module.exports = { newComment, getComments, deleteComment, location }