const schedule = require('../model/schedule')

module.exports = {
    addSchedule: async (req, res) => {
      
        try {
            let newSchedule = new schedule(req.body)
            console.log(newSchedule)
            let result = newSchedule.save()
            console.log(result)

            res.status(200).send(result)
        }catch {
            res.status(401).send('Adding a schedule ran into an error')
        }
    },
    changeStatus: async (req, res) => {
        console.log('Updating', req)
        try {

            let valueToUpdate = { _id : req.body._id }

            let updateValue = { $set: req.body }

            let options = { upsert: true }

            let updatedValue = await schedule.updateOne(valueToUpdate, updateValue, options)
            comsole.log(updatedValue)

            if(updateValue.modifiedCount === 1) {
                res.status(200).send(req.body, 'has been updated')
            }else {
                res.status(304).send({text: req.body.text}, 'wasn\'t deleted')
            }
        }
        catch {
            res.status(500).send('We ran into an issue')
        }

    }
}