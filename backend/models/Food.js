import mongoose from 'mongoose';

const FoodSchema = new mongoose.Schema({
    imageRes:{
        type: String, 
        require:true 
    },
    NameRes:{
        type: String, 
        require:true 
    },
    Rate:{
        type: Number, 
        require:true 
    },
    imageUrl:{
        type:[String],
        require:true 
    },
    title:{
        type:[String],
        require:true 
    },
    subtitle:{
        type:[String],
        require:true 
    },
    Location:{
        type:String,
        require:true 
    }
})

const FoodModel =mongoose.model("foods",FoodSchema)
export default FoodModel;