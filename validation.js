const { userSchema } = require('./schema')

function isValidCompany(data) {
    return userSchema.safeParse(data);
}

module.exports = { isValidCompany };