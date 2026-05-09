const jwt = require('jsonwebtoken');
const User = require('../models/User');
const AppError = require('../utils/AppError');
const { success, fail } = require('../utils/jsend');

//  Generate a signed JWT token for a user

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  });
};

//  POST /auth/register
//  Register a new user
exports.register = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    // Prevent self-assigning admin role
    const safeRole = role === 'admin' ? 'user' : role;

    const user = await User.create({ name, email, password, role: safeRole });
    const token = signToken(user._id);

    return success(res, { token, user }, 201);
  } catch (err) {
    next(err);
  }
};


// POST /auth/login
// Login with email and password, returns JWT

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validate input presence
    if (!email || !password) {
      return next(new AppError('Please provide an email and password.', 400));
    }

    // Find user and explicitly select password
    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await user.comparePassword(password))) {
      return next(new AppError('Incorrect email or password.', 401));
    }

    const token = signToken(user._id);

    return success(res, { token, user });
  } catch (err) {
    next(err);
  }
};
