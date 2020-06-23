const express = require('express');
const router = express.Router();
const { userSignupValidator } = require("../validator");

const {
    create,
    productById,
    read,
    remove,
    update,
    list,
    listCategories,
    listRelated,
    listBySearch,
    photo
} = require('../controllers/product');

const {
    requireSignin,
    isAdmin,
    isAuth
} = require('../controllers/auth');

const {
    userById
} = require('../controllers/user');


router.get("/product/:productId", read);
router.post("/product/create/:userId", requireSignin, isAuth, isAdmin, create);
router.put("/product/:productId/:userId", requireSignin, isAuth, isAdmin, update);
router.delete("/product/:productId/:userId", requireSignin, isAuth, isAdmin, remove);
router.get("/products", list);
router.get("/product/photo/:productId", photo);


router.get("/products/categories", listCategories);
router.get("/products/related/:productId", listRelated);
router.post("/products/by/search", listBySearch);

router.param("userId", userById);
router.param("productId", productById);

module.exports = router;