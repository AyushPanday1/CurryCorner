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





router.post("/users/:userId/cart",createCart)

router.put("/users/:userId/cart",updateCart)

router.get("/users/:userId/cart",getCart)

router.delete("/users/:userId/cart",deleteCart)


router.post("/users/:userId/orders",authentication,authorization,createOrder)

router.put("/users/:userId/orders",authentication,authorization,updateOrder)


module.exports = router;