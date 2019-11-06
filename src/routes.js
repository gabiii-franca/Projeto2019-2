const express = require("express")

const routes = express.Router()
//const CommerceController = require("./controller/CommerceController")
const UserController = require("./controller/UserController")
//const MonthlyQuoteController = require("./controller/MonthlyQuoteController")


routes.post("/", UserController.store)
//routes.post("/", MonthlyQuoteController.store)
//routes.post("/", CommerceController.store)


module.exports = routes