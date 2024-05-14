const { Schema, model } = require("mongoose");

//Write the schema
const schema = new Schema({
    title:{type:String,require:true,unique:true},
    desc:{type:String,require:true}
});

// Create your model
const Movie = model("Movie",schema);

module.exports = Movie;