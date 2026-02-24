import express from "express";
import { createUser, fetchAllUser, welcometoDb, logInUser, updateUserFinance } from "../../Controllers/UserController/UserController.js";
import { addTransaction, getAllTransactions } from "../../Controllers/UserController/TransactionController.js";


const router = express.Router();


router.route("/").get(welcometoDb);

router.post('/add', addTransaction);           // Add income/expense
router.get('/all', getAllTransactions);        // Get all with balance

router.route("/create").post(createUser);


router.route("/add").post(updateUserFinance);


router.route("/login").post(logInUser);


router.route("/data").get(fetchAllUser);


export default router;