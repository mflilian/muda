const plantsCollection = require('../models/plantSchema');

const getAll = (req, res) => {
    plantsCollection.find((error, plant) => {
        if(error)
            return res.status(500).send(error);
        else 
            return res.status(200).send(plant);
    })
}

const getById = (req, res) => {
    const id = req.params.id;

    plantsCollection.findById(id, (error, plant) => {
        if(error)
            return res.status(500).send(error);
        else{
            if(plant)
                return res.status(200).send(plant);
            else
                return res.status(404).send({ message: "Planta não encontrada."})
        }
    })
}

const addPlant = (req, res) => {
    const plantBody = req.body;
    const plant = new plantsCollection(plantBody);
  
    plant.save((error) => {
        if(error)
            return res.status(400).send(error);
        else
            return res.status(200).send(plant);
    })
 }

 const updatePlant = (req, res) => {
    const id = req.query.id;
    const plantBody = req.body;
    const update = { new: true };

    plantsCollection.findByIdAndUpdate(
        id,
        plantBody,
        update,
        (error, plant) => {
            if(error)
                return res.status(500).send(error);
            else {
                if(plant)
                    return res.status(200).send(plant); 
                else 
                    return res.status(404).send({ message: "Essa planta não existe na base de dados."});
            }
        })
}

const deletePlant = (req, res) => {
    const id = req.query.id;

    plantsCollection.findByIdAndDelete(id, (error, plant) => {
        console.log(plant)
        if(error)
            return res.status(500).send(error);
        else {
            if(plant)
                return res.status(200).send({ message: "Sua planta foi deletada!."})
            else
                return res.status(404).send({ message: "Essa planta não existe na base de dados."})
        }
    })
}

module.exports = {
    getAll,
    getById,
    addPlant,
    updatePlant,
    deletePlant
}