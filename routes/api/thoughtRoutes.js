// require express
const router = require('express').Router();

// require CRUD operators from the controller
const {
    getThoughts,
    getSingleThought,
    createThought,
    deleteThought,
    updateThought,
} = require('../../controllers/thoughtController');

// /api/thoughts/
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoguhtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// export the router
module.exports = router;