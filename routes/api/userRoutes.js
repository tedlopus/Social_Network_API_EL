// require express
const router = require('express').Router();

// require CRUD operators from the controller
const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    addThought,
    removeThought,
} = require('../../controllers/userController');

// /api/users/
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/users/:userId/thoughts
router.route('/:userId/thoughts').post(addThought);

// /api/users/:userId/thoughts/:thoughtId
router.route('/:userId/thoughts/:thoughtId').delete(removeThought);

// export the router
module.exports = router;