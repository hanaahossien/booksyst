import { authormodel } from "../../db/author.model.js";
import { bookmodel } from "../../db/book.model.js";
import { asynchandler } from "../middleware/asynchandler.Mw.js";



export const getauthor = async (req, res, next) => {

    const author = await authormodel.find()
    res.json({ "msg": "all authors", author });


}


export const addauthor =

    async (req, res, next) => {
        try {
            const { name, bio, birthDate, book } = req.body
            const author = await authormodel.create({ name, bio, birthDate, book });
            res.json({ msg: "Added author Sucssed", author })
        } catch (error) {
            res.json({ msg: "error", err: error.message })

        }
    }



export const getSpcAuthor = async (req, res, next) => {

    try {
        const { _id } = req.params
        const Author = await authormodel.findById({ _id });
        if (Author == null) {
            //  next(new Error("this Author id not found", { cause: 400 }))
            res.json({ msg: "no id" })
        }
        else {
            res.json({ msg: "  Author data", Author })
        }
    } catch (error) {
        res.json({ msg: "error", err: error.message })
    }


}




export const deleteAuthor = asynchandler(async (req, res, next) => {
    const { _id } = req.params
    const Author = await authormodel.findByIdAndDelete({ _id });
    if (Author == null) {
        // return res.json({ msg: "this Author id not found" })
        return next(new Error("this Author id not found", { cause: 400 }))
    }
    else {
        res.json({ msg: "Deleted sucssed " })
    }
})

export const updateAuthor = asynchandler(async (req, res, next) => {

    const { _id } = req.params

    const { name, bio, birthDate, book } = req.body
    const newdata = { name, bio, birthDate, book }
    const author = await authormodel.findByIdAndUpdate({ _id }, newdata, { new: true });
    if (author == null) {
        //   return res.json({ msg: "this id not found" })
        return next(new Error("this author id not found", { cause: 400 }))
    }
    else {
        res.json({ msg: "Updated sucssed ", author })
    }
})




export const pagination = async (req, res, next) => {
    const { page = 1, limit = 10 } = req.query;

    const offset = (page - 1) * limit;
    const author = await authormodel.find().populate('book').skip(offset).limit(limit);

    res.json({ msg: "author by pagination ", author })


}


export const authoerAndBook = async (req, res, next) => {
    const { page = 1, limit = 10 } = req.query;
    const { _id } = req.params;
    const offset = (page - 1) * limit;
    const author = await authormodel.find({_id}).populate('book').skip(offset).limit(limit);

    res.json({ msg: "author and books ", author })


}

