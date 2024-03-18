const availability = require("../model/availability")

module.exports = {
    addAvailability: async (req, res) => {
        try {
                console.log(req.body)
                let newAvail = new availability(req.body)
                console.log(newAvail)
                let result = await newAvail.save()
                console.log(result)
                res.status(200).send('Availability has been saved')

        }catch {
            res.status(500).send('We ran into an error')

        }

    }
}