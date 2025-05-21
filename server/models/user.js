const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');

const userSchema=new mongoose.Schema({
FirstName :{type:String,required:true},
LastName :{type:String,required:true},
email :{type:String,required:true},
Password :{type:String,required:true},
});

userSchema.method.generateAuthToken=function(){
  const token =jwt.sign({_id:this._id},process.env.JWTPRIVATEKEY,{expiresIn:"7d"});
  return token
};
const User =mongoose.model("user",userSchema);
const validate=(data)=>{
  const schema=joi.object({
   firstName:joi.string().require().label("First Name"),
   lasttName:joi.string().require().label("Last Name"),
   email:joi.string().email().require().label("email"),
  password:passwordComplexity().require().label("Password"),

  });
  return schema.validate(data)
}
module.export={User,validate};