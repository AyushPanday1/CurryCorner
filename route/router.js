const express=require("express")
const router=express.Router()
const {createShop,UpdateeShop}=require('../controller/shopController')

router.post("/createshop",createShop)
router.post("/Updateshop",UpdateeShop)

module.exports = router;