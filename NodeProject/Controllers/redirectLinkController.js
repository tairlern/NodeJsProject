
import LinksModel from "../Models/LinksModel.js";
import redirectLinkModel from "../Models/redirectLinkModel.js";

const redirectLinkController = {
    getList: async (req, res) => {
        try {
            const users = await redirectLinkModel.find();//ללא סינון
            res.json(users);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },

    // getById: async (req, res) => {
    //     try {
    //         // await TaskModel.find({_id:req.params.id})
    //         const http = require('http');
    //          http.createServer((req, res) => { res.writeHead(301, { 'Location': 'http://localhost:3000/links' }); res.end(); }).listen(3000); 
    //         const user = await redirectLinkModel.findById(req.params.id);//שליפה לפי מזהה
    //         res.json(user);
    //     } catch (e) {
    //         res.status(400).json({ message: e.message });
    //     }
    // },
    
    getById : async (req, res) => {
        const http = require('http');
        try {
            // const link = await redirectLinkModel.findById(req.params.id);
            const long=await LinksModel.findById(req.params.id)
            if (!long) {
                return res.status(404).json({ message: 'Link not found' });
            }
            
            const redirectUrl = long.body.originalUrl;
            res.writeHead(301, { 'Location': redirectUrl });
            res.end();
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    add: async (req, res) => {
        const {  LongLinkId,urlShort } = req.body;
        try {
            const newUser = await redirectLinkModel.create({  LongLinkId,urlShort });//הוספת חדש
            res.json(newUser);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },

    update: async (req, res) => {
        const { id } = req.params;
        try {
            const updatedUser = await redirectLinkModel.findByIdAndUpdate(id, req.body, { new: true });//עדכון לפי מזהה
            res.json(updatedUser);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },

    delete: async (req, res) => {
        const { id } = req.params;
        try {
            const deleted = await redirectLinkModel.findByIdAndDelete(id);//מחיקה לפי מזהה
            res.json(deleted);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },
};

export default redirectLinkController;
