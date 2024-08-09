import mongoose from 'mongoose';

const GuideSchema = new mongoose.Schema({
    imgurl: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    bio: {
        type: String,
        required: true,
    },
    cityOfBirth: {
        type: String,
        required: true,
    },
    cityOfWork: {
        type: String,
        required: true,
    },
    birthday: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    languages: {
        type: [String],
        required: true,
    },
    facebook: {
        type: String,
        required: true,
    },
    instagram: {
        type: String,
        required: true,
    },
    whatsapp: {
        type: String,
        required: true,
    },
    twitter: {
        type: String,
        required: true,
    },
});

const Guide = mongoose.model("Guide", GuideSchema);

export default Guide;