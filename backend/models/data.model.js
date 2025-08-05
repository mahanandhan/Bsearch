import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    }
})
const Data = mongoose.model('Data', DataSchema);
export default Data;