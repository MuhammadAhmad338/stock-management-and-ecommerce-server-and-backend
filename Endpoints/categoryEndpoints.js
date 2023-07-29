const express = require("express");
const { addCategory, getByCategory } = require("../Controllers/categories");
const router = express.Router();

router.post("/addProduct", addCategory);
router.get("/:id", getByCategory);

module.exports = router;