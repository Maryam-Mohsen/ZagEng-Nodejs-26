const success = (res, data, statusCode = 200) => {
  return res.status(statusCode).json({
    status: 'success',
    data,
  });
};

const fail = (res, message, statusCode = 400) => {
  return res.status(statusCode).json({
    status: 'fail',
    message,
  });
};

const error = (res, message, statusCode = 500) => {
  return res.status(statusCode).json({
    status: 'error',
    message,
  });
};

module.exports = { success, fail, error };
