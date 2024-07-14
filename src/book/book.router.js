import { Router } from "express";
import { addbook, deleteBook, getbook, getSpcBook, updateBook } from "./book.controler.js";
import { bookschema, idchema, updatechema } from "./book.validation.js";
import { validationMw } from "../middleware/validation.Mw.js";


export const bookrouter = Router()

bookrouter.get("/", getbook).post("/add", validationMw(bookschema), addbook)
    .get("/:_id", validationMw(idchema), getSpcBook).delete("/:_id", validationMw(idchema), deleteBook)
    .patch("/:_id",validationMw(updatechema), updateBook)