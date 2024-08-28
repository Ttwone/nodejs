const express = require ('express');
const router = express.Router();
const {getGoals,setGoal} = require("../controllers/goalControllers")

router.get('/',getGoals)

router.get('/',setGoal)

module.exports = router