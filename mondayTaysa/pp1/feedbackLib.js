let feedbackList = [];
let idCounter = 1;

function addOne(sender, message, rating){
    const feedback = {
        id: idCounter++,
        sender,
        message,
        rating
    }

    feedbackList.push(feedback);
    return feedback;
}

function getAll() {
    return feedbackList;
}

function findById(id) {
    return feedbackList.find((item) => Number(item.id) === Number(id));
}

function updateById(id, newData) {
    const feedback = findById(id);
    return !feedback ? null : Object.assign(feedback, newData);
}

function deleteById(id) {
    const deletedFeeback = findById(id);
    if (deletedFeeback){
        const initialLength = feedbackList.length;
        feedbackList = feedbackList.filter((feedback) => feedback.id !== Number(id));
        return feedbackList.length < initialLength;
    }
    return false;
}

module.exports = {
    addOne,
    getAll,
    findById,
    updateById,
    deleteById
};

// if (require.main === module) {
//     let result = addOne("John Smith", "Great session on React components! I found the examples very helpful.", 4);
//     console.log(result);
//     console.log("getAll called:", getAll());
//     console.log("findById called:", findById(1));
//     console.log("Update by id:", updateById(1, {rating: 5}));
//     console.log("Delete by id:", deleteById(1));
//    }
