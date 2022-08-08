const Product = require("../models/productModels");
const ErrorHander = require("../utils/errorhander");
const catchAsyncError = require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apifeatures");



// create Product --admin

exports.createProduct = catchAsyncError(async (req,res,next)=>{
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product 
    })
})


// Get all product
exports.getAllProducts = catchAsyncError( async(req,res)=>{

    const apiFeatured = new ApiFeatures(Product.find(),req.query).search();
    const products = await apiFeatured.query; 
    
    res.status(200).json({
        success: true,
        products})
})


// update Product --admin

exports.updateProduct = catchAsyncError( async (req,res,next)=>{
    let product =await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHander("product not found",404))
    }

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify: false
    });
    res.status(200).json({
        success:true,
        product
    })
})


// get product details

exports.getProductDetails = catchAsyncError( async(req,res,next)=>{
    const product = await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHander("Product not found",404))
    }


    res.status(200).json({
        success: true,
        product
    })

}) 


// delete product

exports.deleteProduct = catchAsyncError( async(req,res,next)=>{
    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHander("Product not found",404))
    }

    await product.remove();

    res.status(200).json({
        success: true,
        message:"Product Delete found"
    })
})