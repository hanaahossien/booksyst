import { Router } from "express";
import { addauthor, authoerAndBook, deleteAuthor, getauthor, getSpcAuthor, pagination, updateAuthor } from "./author.controler.js";
import { addAurhorSchema, auherUpdateSchema, auterIdschema } from "./autor.validation.js";
import { validationMw } from "../middleware/validation.Mw.js";



export const authorrouter= Router();

authorrouter.get('/',getauthor).post("/add",validationMw(addAurhorSchema),addauthor).get('/:_id',validationMw(auterIdschema),getSpcAuthor)
.delete('/:_id',validationMw(auterIdschema),deleteAuthor).patch("/:_id",validationMw(auherUpdateSchema),updateAuthor)
.put('/pagination',pagination).put('/authoerAndBook/:_id',authoerAndBook)