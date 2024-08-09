import mongoose from 'mongoose';

const mosques = new mongoose.Schema({
    imageUrl:{
        type:String,
        require:true 
    },
    title:{
        type:String,
        require:true 
    },
    subtitle:{
        type:String,
        require:true 
    },
    image:{
        type: [String], 
        require:true 
    }
})


const mosquesModel =mongoose.model("mosques",mosques)

export default mosquesModel;