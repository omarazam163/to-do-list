const knex= require("knex")
const config = require("../knexfile.js")
const dp = knex(config.development)
module.exports= dp;