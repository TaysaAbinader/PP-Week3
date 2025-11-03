const Feedback = require("./feedbackLib.js");

const getAllFeedbacks = (req, res) => {
    const feedbacks = Feedback.getAll();
    res.json(feedbacks);
};

const createFeedback = (req, res) => {
    const {sender, message, rating} = req.body;

    const newFeedback = Feedback.addOne(sender, message, rating);

    newFeedback ? res.json(newFeedback) : res.json({message: "Failed to create feedback."});
};

const getFeedbackById = (req, res) => {
    const feedbackId = parseInt(req.params.id);
    const feedback = Feedback.findById(feedbackId);

    return feedback ? res.json(feedback) : res.json({message: "Feedback not found"});
};

const updateFeedback = (req, res) => {
    const feedbackId = parseInt(req.params.id);
    const {sender, message, rating} = req.body;
    const updatedFeedback = Feedback.updateById(feedbackId, {sender, message, rating});

    return updatedFeedback ? res.json({message: "Update successful.", updatedFeedback}) : res.json({message: "Feedback not found."})
};

const deleteFeedback = (req, res) => {
    const feedbackId = parseInt(req.params.id);

    const isDeleted = Feedback.deleteById(feedbackId);

    return isDeleted ? res.json({message: "Feedback deleted." }) : res.json({message: "Feedback not found."})
};

module.exports = {
  getAllFeedbacks,
  getFeedbackById,
  createFeedback,
  updateFeedback,
  deleteFeedback,
};
