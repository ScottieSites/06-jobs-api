const Account = require("../models/Job");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllAccounts = async (req, res) => {
  const accounts = await Job.find({ createdBy: req.user.userId }).sort(
    "createdAt"
  );
  res.status(StatusCodes.OK).json({ accounts, count: accounts.length });
};

const getAccount = async (req, res) => {
  const {
    user: { userId },
    params: { id: accountId },
  } = req;

  const account = await Account.findOne({
    _id: accountId,
    createdBy: userId,
  });
  if (!account) {
    throw new NotFoundError(`Account not found ${accountId}`);
  }
  res.status(StatusCodes.OK).json({ account });
};

const createAccount = async (req, res) => {
  req.body.createdBy = req.user.userID;
  const account = await Account.create(req.body);
  res.status(StatusCodes.CREATED).json({ account });
};

const updateAccount = async (req, res) => {
const {
    body:{company, position},
 user: { userId },
    params: { id: accountId },
        } = req;
    if(company === '' || position === '') {
        throw new BadRequestError("Please add company and position");
    }    
 const account = await Account.findByIdAndUpdate({_id:accountId,createdBy:userId}, req.body, {new:true, runValidators: true});
 if (!account) {
    throw new NotFoundError(`Account not found ${accountId}`);
  }
  res.status(StatusCodes.OK).json({ account });

};

const deleteAccount = async (req, res) => {
    const {
        user: { userId },
        params: { id: accountId },
    } = req;
    const account = await Account.findByIdAndRemove({
    _id:accountId,
    createdBy: userId,
    })
    if (!account) {
        throw new NotFoundError(`Account not found ${accountId}`);
    }
    res.status(StatusCodes.OK).json({ account });
};

module.exports = {
  getAllAccounts,
  getAccount,
  createAccount,
  updateAccount,
  deleteAccount,
};
