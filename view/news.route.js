// photoUploadRoute.js
const express = require('express');
const Router = express.Router();
const photoupload= require('../middleware/mediaupload');
const newscontroller= require('../controller/news');
const jwtmiddleware=require('../middleware/jwtmiddleware')

// POST route for uploading a single photo
Router.post('/news', jwtmiddleware,photoupload, newscontroller.news);
Router.get('/getnews',newscontroller.getAllnews);
Router.get('/get/photo/:state',newscontroller.getbystate);
Router.get('/get/photo/district',newscontroller.getbydistrict);
Router.get('/get/photo/:city',newscontroller.getbycity);
Router.delete('/deletephoto/:id',jwtmiddleware,newscontroller.deletenews);

module.exports = Router;