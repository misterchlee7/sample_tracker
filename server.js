// Configuration
const express = require('express');
const app = express();

const path = require('path');

const cors = require('cors');
app.use(cors());

app.use(express.static( __dirname + '/sampleTrackerApp/dist' ));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var dateFormat = require('dateformat');

let morgan = require("morgan");
app.use(morgan('dev'));

// Model
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sampleTracker');
mongoose.Promise = global.Promise;
const { Schema } = mongoose;
const UserSchema = new Schema({
    firstName: {type: String, required: true, length:2},
    lastName: {type: String, required: true, length:2},
    userLevel: {type: Number, default: 1},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, minlength:8},
    products: [{type: Schema.Types.ObjectId, ref: 'Product'}],
    favorites: []
},  {timestamps: true });
const ProductSchema = new Schema({
    styleNo: {type: String, required: true},
    status: {type: String, required: true},
    color: {type: String, required: true},
    season: {type: String, required: true},
    description: {type: String},
    location: {type: String},
    history: [],
    _user: {type: Schema.Types.ObjectId, ref: 'User'}
    // optional field for user
}, {timestamps:true});

const uniqueValidator = require('mongoose-unique-validator');
UserSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });
ProductSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });

const User = mongoose.model('User', UserSchema);
const Product = mongoose.model('Product', ProductSchema);

// Controller
const userController = {
    index: (req,res) => {
        User.find({}).populate('products').exec()
            .then(users => res.json({users:users}))
            .catch(error => res.json({error:error}));
    },
    find: (req, res) => {
        User.findOne({email: req.params.email})
            .then(user => res.json({user:user}))
            .catch(error => res.json({error:error}));
    },
    create: (req,res) => {
        User.create(req.body)
            .then(user => res.json({user:user}))
            .catch(error => res.json({error:error}));
    },
    delete: (req,res) => {
        User.findByIdAndRemove(req.params.id)
            .then(res => res.json({res:res}))
            .catch(error => res.json({error:error}));
    },
    update: (req,res) => {
        User.findByIdAndUpdate(req.params.id, req.body)
            .then(product=> res.json({product:product}))
            .catch(error => res.json({error:error}));
    },
    add: (req, res) => {
        console.log('server js ', req.body.items)
        User.findOne({_id: req.params.id})
            .then(user => user.products.push(req.body.items).save())
            .catch(error => res.json({error:error}));
    }
};

const productController = {
    index: (req,res) => {
        Product.find({})
            .then(products => res.json({products:products}))
            .catch(error => res.json({error:error}));
    },
    find: (req,res) => {
        Product.findOne({_id:req.params.id})
            .then(product => res.json({product:product}))
            .catch(error => res.json({error:error}));
    },
    create: (req,res) => {
        Product.create(req.body)
            .then(product => res.json({product:product}))
            .catch(error => res.json({error:error}));
    },
    delete: (req,res) => {
        Product.findByIdAndRemove(req.params.id)
            .then(res => res.json({res:res}))
            .catch(error => res.json({error:error}));
    },
    update: (req,res) => {
        Product.findByIdAndUpdate(req.params.id, req.body)
            .then(product=> res.json({product:product}))
            .catch(error => res.json({error:error}));
    }
};

// Routes
app 
// users
.get('/api/users', userController.index)
.get('/api/users/:id', userController.find)
.post('/api/users', userController.create)
.put('/api/users/:id', userController.update)
.post('/api/users/:id', userController.add)
.delete('/api/users/:id', userController.delete)
// products
.get('/api/products', productController.index)
.get('/api/products/:id', productController.find)
.post('/api/products', productController.create)
.put('/api/products/:id', productController.update)
.delete('/api/products/:id', productController.delete)
.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./sampleTrackerApp/dist/index.html"))
});

// Server Listener
const port = 8000;
app.listen(port, ()=> console.log(`Express server listening on port ${port}`));
