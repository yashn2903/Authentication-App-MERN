import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import userModel from '../Models/userModel.js'


const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

const loginUser = async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await userModel.findOne({ email })

        if (!user) {
            return res.json({ success: false, message: "user not found!" })
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const token = createToken(user._id)
            res.json({
                success: true,
                userdata: {
                    user: {
                        id: user._id,
                        username: user.name,
                        email: user.email,
                    },
                    token,
                },
                message: "User loged-in successfully"
            })
        }
        else {
            res.json({ success: false, message: "Invalid credentials" })
        }

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

const registerUser = async (req, res) => {
    try {

        const { name, email, password } = req.body;

        const exists = await userModel.findOne({ email });

        if (exists) {
            return res.json({ success: false, message: "User already exists" })
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter valid email" })
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "please enter a strong password" })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPasssword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            password: hashedPasssword
        })

        const user = await newUser.save()

        const token = createToken(user._id)

        res.json({
            success: true,
            userdata: {
                user: {
                    id: user._id,
                    username: user.name,
                    email: user.email,
                },
                token,
            },
            message: "User registered successfully"
        })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

export { loginUser, registerUser }