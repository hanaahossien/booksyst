import Joi from "joi";


export const bookschema =
{
    body: Joi.object({
        title: Joi.string().required(),
        content: Joi.string().required(),
        author: Joi.string().required(),
        //publishedDate:Joi.string()
    })
}

export const idchema =
{
    params: Joi.object({
        _id: Joi.string().required().length(24).hex()


    })
}


export const updatechema =
{
    body: Joi.object({
        title: Joi.string().required(),
        content: Joi.string().required(),
        author: Joi.string().required(),
    }),
    params: Joi.object({
        _id: Joi.string().required().length(24).hex()


    })
}