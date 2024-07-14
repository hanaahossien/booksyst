import Joi from "joi";

export const addAurhorSchema = {
    body: Joi.object({
        name: Joi.string().required(),
        bio: Joi.string(),
        birthDate: Joi.date(),
        book: Joi.array().items(Joi.string().length(24).hex())
    }),
}


export const auterIdschema = {
    params: Joi.object({
        _id: Joi.string().length(24).hex().required()
    })
}

export const auherUpdateSchema = {
    body: Joi.object({
        name: Joi.string().required(),
        bio: Joi.string(),
        birthDate: Joi.date(),
        book: Joi.array().items(Joi.string().length(24).hex())
    })
    ,
    params: Joi.object({
        _id: Joi.string().required().length(24).hex()


    })
}