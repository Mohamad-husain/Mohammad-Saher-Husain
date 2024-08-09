import mongoose from 'mongoose';

const PlacesData = new mongoose.Schema({
    imageUrl:{
        type:String,
        required:true
    },
    abbreviation:{
        type:String,
        required:true
    },
    name_Places:{
        type:String,
        required:true
    },
    description_Places:{
        type:String,
        required:true
    }

})

const PlacesModel = mongoose.model("places" , PlacesData)

export default PlacesModel;