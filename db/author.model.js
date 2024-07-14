import mongoose  from 'mongoose';
const { Schema } = mongoose;

const authorSchema = new Schema({
    name:{type:String ,required:true},
    bio:{type:String },
    birthDate:{type:String },
    book:{type:[Schema.Types.ObjectId],ref:'book'}

//    book:{type:[],ref:'book'}
},{timestamps:true , versionKey:false});

export  const authormodel = mongoose.models.authormodel || mongoose.model('author', authorSchema);
