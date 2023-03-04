const express = require("express")
const router = express.Router()
const { createShop, UpdateeShop } = require('../controller/shopController')
const { createProduct, updateProuct } = require("../controller/productController")

router.post("/shop", createShop)

router.put("/shop/:shopId", UpdateeShop)


router.post("/product", createProduct)
router.put("/product/:productId", updateProuct)


module.exports = router;