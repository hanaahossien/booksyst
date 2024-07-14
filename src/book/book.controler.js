import { bookmodel } from "../../db/book.model.js";
import { asynchandler } from "../middleware/asynchandler.Mw.js";








export const addbook = asynchandler(async (req, res, next) => {

    const { title, content, author } = req.body
    const book = await bookmodel.create({ title, content, author });
    res.json({ msg: "Added book Sucssed", book })

}
);


export const getbook = asynchandler(async (req, res, next) => {

    const book = await bookmodel.find();
    res.json({ "msg": "all book", book })


})



export const getSpcBook = asynchandler(async (req, res, next) => {

    const { _id } = req.params

    const book = await bookmodel.findById({ _id });
    if (book == null) {
        next(new Error("this book id not found", { cause: 400 }))

    }
    else {
        res.json({ msg: "the book", book })
    }


})


export const deleteBook = asynchandler(async (req, res, next) => {

    const { _id } = req.params
    const book = await bookmodel.findByIdAndDelete({ _id });
    if (book == null) {
        //  return res.json({ msg: "this book id not found" })
        return next(new Error("this book id not found", { cause: 400 }))

    }
    else {
        res.json({ msg: "Deleted sucssed ", book })

    }
})


export const updateBook = asynchandler(async (req, res, next) => {

    const { _id } = req.params

    const { title, content, author } = req.body
    const newdata = { title, content, author }
    const book = await bookmodel.findByIdAndUpdate({ _id }, newdata, { new: true });
    if (book == null) {
        //  return res.json({ msg: "this id not found" })
        return next(new Error("this book id not found", { cause: 400 }))
    }
    else {
        res.json({ msg: "Updated sucssed ", book })
    }


})