const plantsCollection = require('../models/plantSchema');

const getAll = (req, res) => {
    plantsCollection.find((error, plant) => {
        if(error)
            return res.status(500).send(error);
        else 
            return res.status(200).send(plant);
    })
}

const addPlant = (req, res) => {
    const plantBody = req.body;
    const plant = new plantsCollection(plantBody);
  
    plant.save((error) => {
        if(error)
            return res.status(400).send(error);
        else
            return res.status(200).send(plant)
    })
 }

module.exports = {
    getAll,
    addPlant
    
}