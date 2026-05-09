const User = require('../models/User');
const AppError = require('../utils/AppError');
const { success, fail } = require('../utils/jsend');

// Admin only — get all users with pagination

exports.getAllUsers = async (req, res, next) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(req.query.limit) || 10));
    const skip = (page - 1) * limit;

    const [users, total] = await Promise.all([
      User.find().skip(skip).limit(limit).sort({ createdAt: -1 }),
      User.countDocuments(),
    ]);

    const totalPages = Math.ceil(total / limit);

    return success(res, {
      users,
      pagination: {
        total,
        totalPages,
        currentPage: page,
        limit,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },
    });
  } catch (err) {
    next(err);
  }
};


// Authenticated — get a single user by ID

exports.getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return next(new AppError('No user found with that ID.', 404));
    }

    // Regular users can only view their own profile
    if (req.user.role !== 'admin' && req.user.id !== req.params.id) {
      return next(new AppError('You do not have permission to view this user.', 403));
    }

    return success(res, { user });
  } catch (err) {
    next(err);
  }
};

// PATCH /users/:id
// Authenticated — update own profile (name, email)

exports.updateUser = async (req, res, next) => {
  try {
    // Prevent password and role updates through this route
    const { password, role, ...allowedUpdates } = req.body;

    // Regular users can only update their own profile
    if (req.user.role !== 'admin' && req.user.id !== req.params.id) {
      return next(new AppError('You do not have permission to update this user.', 403));
    }

    // Admins can update role
    if (req.user.role === 'admin' && role) {
      allowedUpdates.role = role;
    }

    const user = await User.findByIdAndUpdate(req.params.id, allowedUpdates, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return next(new AppError('No user found with that ID.', 404));
    }

    return success(res, { user });
  } catch (err) {
    next(err);
  }
};

// Admin only — delete a user

exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return next(new AppError('No user found with that ID.', 404));
    }

    return success(res, null, 204);
  } catch (err) {
    next(err);
  }
};

// Authenticated — get current logged-in user's profile

exports.getMe = async (req, res, next) => {
  try {
    return success(res, { user: req.user });
  } catch (err) {
    next(err);
  }
};

// PATCH /users/me/profile-pic
// Authenticated — upload profile picture

exports.uploadProfilePic = async (req, res, next) => {
  try {
    if (!req.file) {
      return next(new AppError('Please upload an image file.', 400));
    }

    const profilePicPath = `/uploads/${req.file.filename}`;

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { profilePic: profilePicPath },
      { new: true }
    );

    return success(res, { user });
  } catch (err) {
    next(err);
  }
};
