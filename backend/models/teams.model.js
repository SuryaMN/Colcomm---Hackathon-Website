const mongoose = require("mongoose")


var teamSchema = new mongoose.Schema({
    name:{type:String, required:true},
    members:{type:Array,require:true},
    requests:{type:Array,require:true}
},{timestamps:true})


const Team = mongoose.model("Team",teamSchema)


module.exports = Team;