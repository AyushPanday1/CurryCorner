const comentModel=require("../model/comment")


const newComment = async function (req, res){
    try {
        const comment = await comentModel.create(req.body)
        res.status(200).send({data:comment})
    } catch (e) {
        res.status(500).send({ status: false, data:e.message })
    }
}


const getComments = async function (req, res){
    try {
        const comments = await comentModel.find({ itemId: req.params.id });
        
        res.status(200).send({data:comments})
    } catch (e) {
        res.status(500).send({ status: false, data:e.message })
    }
}

const deleteComment = async function (req, res) {
    try {
        const comment = await comentModel.findById(req.params.id);
        await comment.delete()

        res.status(200).send({data:'comment deleted successfully'});
    } catch (e) {
        res.status(500).send({ status: false, data:e.message })
    }
}

module.exports={newComment,getComments,deleteComment}