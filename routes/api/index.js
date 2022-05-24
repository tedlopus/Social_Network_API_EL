// require express, userRoutes, and thoughtRoutes
const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

// /api/thoughts
router.use('/thoughts', thoughtRoutes);

// /api/users
router.use('/users', userRoutes);

// export the router
module.exports = router;