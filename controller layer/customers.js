const express = require("express");
const router = express.Router();

const {getAllCustomers} = require("../service layer/customers");

router.get("/", async (req, res) => {
    const customers = await getAllCustomers();
    res.status(200).json({ customers: customers.toJSON() });
});

module.exports = router;