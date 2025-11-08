const userModel = require('../models/user.model');
const freelancerModel = require('../models/freelancer.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// ===================== USER REGISTER =====================
const userRegister = async (req, res) => {
  try {
    const { phone, password, fullName } = req.body;

    const phoneFound = await userModel.findOne({ phone });
    if (phoneFound) {
      return res.status(400).json({ message: 'Phone Already Exists.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = await userModel.create({
      fullName,
      phone,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: createdUser._id, role: 'user' }, process.env.SECRET, { expiresIn: '7d' });
    return res.status(201).json({ user: createdUser, token });
  } catch (err) {
    return res.status(500).json({ message: 'Internal server error!' });
  }
};

// ===================== USER LOGIN =====================
const userLogin = async (req, res) => {
  try {
    const { phone, password } = req.body;
    const userFound = await userModel.findOne({ phone });

    if (!userFound) {
      return res.status(404).json({ message: 'User not Found. Register First.' });
    }

    const done = await bcrypt.compare(password, userFound.password);
    if (!done) {
      return res.status(401).json({ message: 'Incorrect Credentials.' });
    }

    const token = jwt.sign({ id: userFound._id, role: 'user' }, process.env.SECRET, { expiresIn: '7d' });
    return res.status(200).json({ user: userFound, token });
  } catch (err) {
    return res.status(500).json({ message: 'Internal server error!' });
  }
};

// ===================== FREELANCER REGISTER =====================
const freelancerRegister = async (req, res) => {
  try {
    const { phone, password, fullName, city, pinCode, district } = req.body;

    const phoneFound = await freelancerModel.findOne({ phone });
    if (phoneFound) {
      return res.status(400).json({ message: 'Phone Already Exists.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const createdFreelancer = await freelancerModel.create({
      fullName,
      phone,
      password: hashedPassword,
      place: { city, district, pinCode },
    });

    const token = jwt.sign({ id: createdFreelancer._id, role: 'freelancer' }, process.env.SECRET, { expiresIn: '7d' });
    return res.status(201).json({ freelancer: createdFreelancer, token });
  } catch (err) {
    return res.status(500).json({ message: 'Internal server error!' });
  }
};

// ===================== FREELANCER LOGIN =====================
const freelancerLogin = async (req, res) => {
  try {
    const { phone, password } = req.body;
    const freelancerFound = await freelancerModel.findOne({ phone });

    if (!freelancerFound) {
      return res.status(404).json({ message: 'Freelancer not Found. Register First.' });
    }

    const done = await bcrypt.compare(password, freelancerFound.password);
    if (!done) {
      return res.status(401).json({ message: 'Incorrect Credentials.' });
    }

    const token = jwt.sign({ id: freelancerFound._id, role: 'freelancer' }, process.env.SECRET, { expiresIn: '7d' });
    return res.status(200).json({ freelancer: freelancerFound, token });
  } catch (err) {
    return res.status(500).json({ message: 'Internal server error!' });
  }
};

// ===================== EXPORTS =====================
module.exports = {
  userRegister,
  userLogin,
  freelancerRegister,
  freelancerLogin,
};
