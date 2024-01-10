const express=require('express');
const catchAsync = require('../utils/catchAsync');
// const ExpressError=require('../utils/ExpressError');
// const Campground=require('../models/campground')
// const {campgroundSchema}=require('../schemas.js')
const {isLoggedIn,isAuthor,validateCampground}=require('../middleware')
const multer=require('multer')
const {storage}=require('../cloudinary')
const upload=multer({storage})

const campgrounds=require(('../controllers/campgrounds'))
const router=express.Router();

//upload.array('image'),

router.route('/')
.get(catchAsync(campgrounds.index))
.post(isLoggedIn,upload.array('images'),validateCampground, catchAsync(campgrounds.createCampground))


router.get('/new',isLoggedIn,campgrounds.renderNewForm)


router.route('/:id')
.get(catchAsync(campgrounds.showCampground))
.put(isLoggedIn,isAuthor,upload.array('images'),validateCampground,catchAsync(campgrounds.updateCampground))
.delete(isLoggedIn,isAuthor,catchAsync(campgrounds.deleteCampground))

router.get('/:id/edit',isLoggedIn,isAuthor,catchAsync(campgrounds.renderEditForm))



module.exports=router;




