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

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/reactionId').delete(removeReaction);

// export the router
module.exports = router;