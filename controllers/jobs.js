const Job = require('../models/Job')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError, NotFoundError} = require('../errors')

const getAllAccounts = async (req, res) => {
    res.send('get all accounts')
}

const getAccount = async (req, res) => {
    res.send('get account')
}

const createAccount = async (req, res) => {
    req.body.createdBy = req.user.userID
    const account = await Account.create(req.body)
    res.status(StatusCodes.CREATED).json({account})
}

const updateAccount = async (req, res) => {
    res.send('create account')
}

const deleteAccount = async (req, res) => {
    res.send('create account')
}



module.exports = {
    getAllAccounts,
    getAccount,
    createAccount,
    updateAccount,
    deleteAccount
}