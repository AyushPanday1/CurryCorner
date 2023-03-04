const express = require("express")
const router = express.Router()
const { createShop, UpdateeShop } = require('../controller/shopController')
const { createProduct, updateProuct } = require("../controller/productController")
const { createUser, loginUser, getUser, updateUser } = require("../controller/userController")


router.post("/user", createUser)
router.post("/loginUser", loginUser)
router.get("/user/:userId", getUser)
router.put("/user", updateUser)


router.post("/shop", createShop)

router.put("/shop/:shopId", UpdateeShop)


router.post("/product", createProduct)
router.put("/product/:productId", updateProuct)


module.exports = router;