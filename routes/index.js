const express = require('express');

const router = express.Router();
const coursesController = require('../controller/coursesController');

router.get('/', coursesController.index);

router.get('/get-data', coursesController.getData);

router.post('/insert', coursesController.insertData);

router.post('/update', coursesController.updateData);

router.post('/delete', coursesController.deleteData);

module.exports = router;
