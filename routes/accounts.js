const express = require("express");
const router = express.Router();

const {
  getAllAccounts,
  getAccount,
  createAccount,
  updateAccount,
  deleteAccount,
} = require("../controllers/accounts");

router.route("/").post(createAccount).get(getAllAccounts);
router.route("/:id").get(getAccount).delete(deleteAccount).patch(updateAccount);

module.exports = router;
