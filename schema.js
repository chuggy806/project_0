const { z } = require("zod");

const userSchema = z.object({
    id: z.string(),
    name: z.string(),
    isActive: z.boolean()
});

//const user = {
//     id: "Company1" ,
//     name: "Company1",
//     isActive: true
//}

//console.log(userSchema.safeParse(user).success) //Just for checking

module.exports = { userSchema }