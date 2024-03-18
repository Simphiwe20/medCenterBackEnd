const patient = require('../model/patient')

module.exports = {
    addPatient: async (req, res) => {

    try {
        console.log(req)
        const newViewer = new patient(req.body)
        console.log(newViewer)
        const result =await newViewer.save()
        console.log(result)
        res.status(200).send(result)
        
    } catch (error) {
        res.status(500).send(error)
    }

}
} 