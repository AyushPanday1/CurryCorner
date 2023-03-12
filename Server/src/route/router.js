const express = require("express")
const router = express.Router()
const { createShop, getShop, UpdateeShop } = require('../controller/shopController')
const { createProduct, getProduct, updateProuct, getProductbyShopId } = require("../controller/productController")
const { createUser, loginUser, getUser, updateUser, location } = require("../controller/userController")
const { createCart, updateCart, getCart, deleteCart } = require("../controller/cartcontroller")
const { createOrder, updateOrder } = require("../controller/ordercontroller")


//====================== User Api =========================//

router.post("/user", createUser)
router.post("/loginUser", loginUser)
router.get("/user/:userId", getUser)
router.put("/user/:userId", updateUser)




//===================== Shop APIs ==========================//

router.post("/shop", createShop)
router.put("/shop/:shopId", UpdateeShop)
router.get("/shop", getShop)


//===================== Product APIs ==========================//

router.post("/product", createProduct)
router.put("/product/:productId", updateProuct)
router.get("/product", getProduct)
router.get("/product/:shopId", getProductbyShopId)


//===================== Card APIs ==========================//

router.post("/users/:userId/cart", createCart)

router.put("/users/:userId/cart", updateCart)

router.get("/users/:userId/cart", getCart)

router.delete("/users/:userId/cart", deleteCart)




//===================== Order APIs ==========================//

router.post("/users/:userId/orders", createOrder)

router.put("/users/:userId/orders", updateOrder)


router.get("/location", location)


module.exports = router;