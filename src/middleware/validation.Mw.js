
const keys = ["body", "params", "query", "headers"]
export const validationMw= schema => {
    return (req, res, next) => {
        const errArr = []
        keys.forEach(key => {
            if (schema[key]) {
            const validResult = schema[key].validate(req[key],{ abortEarly: false });
            if (validResult?.error) {
                errArr.push(validResult.error)
            }
        }
        });

        if (errArr.length) {
            res.json({ "msg": "validation error", err: errArr })
        }
next()
    }
}



// const keys = ["body", "params", "query"];

// export const validationMw = (schema) => {
//     return (req, res, next) => {const errArr = [];
//         keys.forEach((key) => {
//             if (schema[key]) {
//                 var validateRsult = schema[key].validate(req[key], { abortEarly: false });
//                 console.log(validateRsult)
//                 if (validateRsult?.error) {
//                     errArr.push(validateRsult.error.details)
//                 }
//             }

//         });
//         if (errArr.length) {
//             return res.json({ MSG: "validation error",err: errArr })

//         }
//         next()

//     }
// }