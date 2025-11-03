let tourList = [];
let idCounter = 1;

function addOne(name, info, image, price){
    const tour = {
        id: idCounter++,
        name,
        info,
        image,
        price
    }

    tourList.push(tour);
    return tour;
}

function getAll() {
    return tourList;
}

function findById(id) {
    return tourList.find((item) => Number(item.id) === Number(id));
}

function updateById(id, newData) {
    const tour = findById(id);
    return !tour ? null : Object.assign(tour, newData);
}

function deleteById(id) {
    const deletedTour = findById(id);
    if (deletedTour){
        const initialLength = tourList.length;
        tourList = tourList.filter((tour) => tour.id !== Number(id));
        return tourList.length < initialLength;
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

if (require.main === module) {
    let result = addOne("7 Days Tour"," Join us for the Best of Helsinki!","https://www.course-api.com/images/tours/tour-x.jpeg", "1,495");
    console.log(result);
    console.log("getAll called:", getAll());
    console.log("findById called:", findById(1));
    console.log("Update by id:", updateById(1, {price: "1,500"}));
    console.log("Delete by id:", deleteById(1));
   }
