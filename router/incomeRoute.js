const router = require("express").Router();
const {
	postIncome,
	getIncome,
	putIncome,
	deleteIncome,
} = require("../controllers/incomeControllers");

router.get("/", getIncome);
router.post("/", postIncome);
router.put("/:id", putIncome);
router.delete("/:id", deleteIncome);

module.exports = router;