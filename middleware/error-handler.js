const { CustomAPIError } = require('../errors')
const { StatusCodes } = require('http-status-codes')
const errorHandlerMiddleware = (err, req, res, next) => {

  let CustomError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg:err.message || 'Something went wrong try again later'
  }
  // if (err instanceof CustomAPIError) {
  //   return res.status(err.statusCode).json({ msg: err.message })
  // }
  if(err.name === 'ValidationError') {
    CustomError.msg = Object.values(err.errors).map((item) => item.message).join(',')
  }

  if (err.code && err.code === 11000) { 
    CustomError.msg = `Duplicate value entered for ${Object.keys(err.keyValue)} filed, please choose another value`
    CustomError.statusCode = 400
  }
if(err.name === 'CastError') {
  CustomError.msg = `No item found with id: ${err.value}`
  CustomError.statusCode = 404
}
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err })
  return res.status(customError.statusCode).json({msg: customError.msg})
}

module.exports = errorHandlerMiddleware
