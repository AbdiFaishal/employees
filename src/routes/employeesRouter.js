const express = require('express');
const router = express.Router();

const {
  getAllEmployees,
  getDetailEmployees,
  addEmployees,
  updateEmployees,
  deleteEmployees,
} = require('../controllers/employees');

router.get('/employees', getAllEmployees);
router.get('/employees/:id', getDetailEmployees);
router.post('/employees', addEmployees);
router.put('/employees/:id', updateEmployees);
router.delete('/employees/:id', deleteEmployees);

module.exports = router;
