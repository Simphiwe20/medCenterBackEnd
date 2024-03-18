const user = require('../model/user')
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    defaultRoute: async (req, res) => {
        try {
            res.send('Welcome to NODE.JS');
        } catch (error) {
            res.status(500).send(error)
        }
    },
    addUser: async (req, res) => {

        try {
            const newViewer = new user(req.body)
            const result =await newViewer.save()
            res.status(200).send(result)
            
        } catch (error) {
            res.status(500).send(error)
        }
        // let payload = { ...req.body };

        // bcrypt.genSalt(saltRounds, (err, salt) => {
        //     bcrypt.hash(payload.password, salt, async (err, hash) => {
        //         try {
        //             // Store hash in your password DB.
        //             payload['password'] = hash;

        //             const newUser = new User(payload)
        //             const result = await newUser.save()
        //             res.status(201).send(result)
        //         } catch (error) {
        //             res.status(500).send(error)
        //         }
        //     });
        // });
    },
    getAllUsers : async (req, res) => {
        try {
            const users = await user.find();
            res.json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
}
}