const Tour = require("./tourLib");

const getAllTours = (req, res) => {
    const tours = Tour.getAll();
    res.json(tours);
};


const createTour = (req, res) => {
    const { name, info, image, price } = req.body;

    const newTour = Tour.addOne(name, info, image, price);

    newTour ? res.json(newTour) : res.json({message: "Failed to create tour."});

};

const getTourById = (req, res) => {
    const tourId = parseInt(req.params.tourId);
    const tour = Tour.findById(tourId);

    return tour ? res.json(tour) : res.json({message: "Tour not found."});
};

const updateTour = (req, res) => {
    const tourId = parseInt(req.params.tourId);
    const { name, info, image, price } = req.body;
    const updatedTour = Tour.updateById(tourId, { name, info, image, price });

    return updatedTour ? res.json({message: "Update successful.", updatedTour}) : res.json({message: "Tour not found, couldn't update."})
};

const deleteTour = (req, res) => {
    const tourId = parseInt(req.params.tourId);
    const isDeleted = Tour.deleteById(tourId);

    return isDeleted ? res.json({message: "Tour deleted."}) : res.json({message: "Tour not found."});
};

module.exports = {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
};
