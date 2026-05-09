const AppError = require('../utils/AppError');

// Handle Mongoose CastError (invalid ObjectId)

const handleCastError = (err) => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(message, 400);
};

// Handle Mongoose duplicate key error

const handleDuplicateKeyError = (err) => {
  const field = Object.keys(err.keyValue)[0];
  const message = `${field.charAt(0).toUpperCase() + field.slice(1)} already in use. Please use a different value.`;
  return new AppError(message, 409);
};

// Handle Mongoose validation errors

const handleValidationError = (err) => {
  const messages = Object.values(err.errors).map((e) => e.message);
  return new AppError(messages.join('. '), 400);
};

// Global error handler middleware

const errorHandler = (err, req, res, next) => {
  let error = { ...err, message: err.message };
  error.statusCode = err.statusCode || 500;
  error.status = err.status || 'error';

  // Handle specific Mongoose/DB errors
  if (err.name === 'CastError') error = handleCastError(err);
  if (err.code === 11000) error = handleDuplicateKeyError(err);
  if (err.name === 'ValidationError') error = handleValidationError(err);

  // Log unexpected errors in development
  if (process.env.NODE_ENV === 'development' && !err.isOperational) {
    console.error('ERROR:', err);
  }

  return res.status(error.statusCode).json({
    status: error.status,
    message: error.message || 'Something went wrong. Please try again later.',
  });
};

module.exports = errorHandler;
