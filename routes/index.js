// require express and routes from api folder
const router = require('express').Router();
const apiRoutes = require('./api');

// /api
router.use('/api', apiRoutes);

// show wrong route when incorrect path name is used
router.use((req, res) => res.send('Wrong route!'));

// export the router
module.exports = router;