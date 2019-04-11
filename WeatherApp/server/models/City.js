const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CitySchema = new Schema({
    name: string,
    updateAt: Date,
    temperature : number,
    condition: string,
    conditionPic : string
})

const City = mongoose.model("City", CitySchema)

module.exports = City