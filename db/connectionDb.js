import mongoose from "mongoose";


export const connectdb= async()=>{
try {
  await  mongoose.connect('mongodb://127.0.0.1:27017/bookApp');
} catch (error) {
res.json({error})

}    


}