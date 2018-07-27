const express       = require('express');
const journalRoutes = require('./api/journal-entries');
const router        = express.Router();


router.get('/', (req, res, next) => {
    res.render('index');
  });
  
router.use('/api', journalRoutes);

module.exports = router;
