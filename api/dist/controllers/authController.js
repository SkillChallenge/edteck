"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const userModel_1 = __importDefault(require("../Modells/userModel")); // Make sure the User model is correctly imported
const db_1 = __importDefault(require("../db"));
class UserController {
    // Register a new user
    static register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, db_1.default)();
            try {
                const { firstName, lastName, email, password } = req.body;
                // Validation checks
                if (!firstName || !lastName || !email || !password) {
                    return res.status(400).json({ message: 'All fields are required' });
                }
                // Create a new user
                const newUser = new userModel_1.default({ firstName, lastName, email, password });
                console.log(newUser);
                yield newUser.save();
                res.status(201).json({ message: 'User registered successfully', data: newUser });
            }
            catch (error) {
                console.error('Registration Error:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    // Login user
    static login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const user = yield userModel_1.default.findOne({ email, password });
                if (!user) {
                    return res.status(404).json({ message: 'User not found' });
                }
                res.status(200).json({ message: 'Login successful', user });
            }
            catch (error) {
                console.error('Login Error:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    // Get all users
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, db_1.default)();
            try {
                const users = yield userModel_1.default.find();
                res.status(200).json({ data: users });
            }
            catch (error) {
                console.error('Error fetching users:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    // Get user by ID
    static getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield userModel_1.default.findById(req.params.id);
                if (!user) {
                    return res.status(404).json({ message: 'User not found' });
                }
                res.status(200).json({ data: user });
            }
            catch (error) {
                console.error('Error fetching user:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    // Update user by ID
    static update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedUser = yield userModel_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
                if (!updatedUser) {
                    return res.status(404).json({ message: 'User not found' });
                }
                res.status(200).json({ message: 'User updated successfully', data: updatedUser });
            }
            catch (error) {
                console.error('Error updating user:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    // Delete user by ID
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deletedUser = yield userModel_1.default.findByIdAndDelete(req.params.id);
                if (!deletedUser) {
                    return res.status(404).json({ message: 'User not found' });
                }
                res.status(200).json({ message: 'User deleted successfully' });
            }
            catch (error) {
                console.error('Error deleting user:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
}
exports.UserController = UserController;
