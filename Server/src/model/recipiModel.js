const { Schema, model, default: mongoose } = require("mongoose")

const recipiSchema = new Schema(
    {
        title: String,
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        image: String,
       
    }
)

module.exports = model("Recipi", recipiSchema)