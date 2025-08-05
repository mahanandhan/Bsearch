import Data from "../models/data.model.js";

export const postData = async (req, res) => {
    try {
        const { name, url, description } = req.body;
        if(!name){
            res.status(400).json({success: false, message: "name is required"});
        }
        if (!url){
            res.status(400).json({success: false, message: "url is required"})
        }
        const data = new Data({
            name,
            url,
            description: description || ''
        })
        await data.save();
        res.status(201).json({success: true, message: "data added successfully", data});
    } catch (error) {
        res.status(500).json({success: false, message: "internal server error"});
        console.error(error);
    }
}

export const getData = async (req, res) => {
    try {
        const { name } = req.query;
        if (!name) {
            return res.status(400).json({ success: false, message: "name query parameter is required" });
        }
        const regexPattern = name.split('').join('\\s*');
        const regex = new RegExp(regexPattern, 'i'); // 'i' for case-insensitive search
        const result = await Data.find({
            $or: [
                { name: { $regex: regex } },
                { url: { $regex: regex } },
                { description: { $regex: regex } }
            ]
            
        })
        res.status(200).json({success: true, data: result});
    } catch (error) {
        res.status(500).json({success: false, message: "internal server error"});
        console.error(error);
    }
}