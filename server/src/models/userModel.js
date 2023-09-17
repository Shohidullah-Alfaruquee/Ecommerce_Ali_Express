const {Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');
const { defaultImagePath } = require('../secret');


 const userSchema = new Schema({
   name: {
      type: String,
      required: [true, "Username is required"],
      trim:true,
      minlength:[3, 'Username atleast 3 character'],
      maxlength:[31, 'Username is maximum 31 character']
   },
   email: {
      type: String,
      required: [true, "User email is required"],
      trim:true,
      unique:true,
      lowercase:true,
      validate: {
         validator: (v)=> {
             return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
         },
         message:"Please enter a valid email"
     }
   },
   password: {
      type: String,
      required: [true, "Password is required"],
      trim:true,
      minlength:[3, 'Password atleast 8 character'],
      set: (v)=> bcrypt.hashSync(v, bcrypt.genSaltSync(10))
   },
   image: {
      type: String,
      default: defaultImagePath
   },
   address: {
      type: String,
      required: [true, "Address is required"],
   },
   phone: {
      type: String,
      required: [true, "Phone no. is required"],
   },
   isAdmin: {
      type: Boolean,
      default:false
   },
   isBanned: {
      type: Boolean,
      default:false
   },
 }, {timestamps:true});

 const User = model('Users', userSchema)

 module.exports = User