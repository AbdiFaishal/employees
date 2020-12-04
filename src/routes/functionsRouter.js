const express = require('express');
const router = express.Router();

const {
  reverseFunction,
  fibonacciFunction,
  combinationFunction,
} = require('../controllers/functions');

router.post('/reverse', reverseFunction);
router.post('/fibonacci', fibonacciFunction);
router.post('/combination', combinationFunction);

module.exports = router;
