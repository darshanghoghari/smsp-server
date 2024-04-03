const { HttpException } = require('../exceptions/HttpsException');
const authService = require('../services/auth.service');
// const { uploadOnCloudinary } = require('../utils/cloudinary.util');

const signupUser = async (req, res, next) => {
    try {
        const user = req.body;

        //implement pending on cludinary
        // //Image management store in local and cloud ....
        // const imageProof = user?.photoProof?.path;
        // // if (!imageProof) throw HttpException(404, "please upload a image");

        // const idProof = await uploadOnCloudinary(imageProof)
        // if (!idProof) throw HttpException(404, 'Upload valid Image.... ');

        // user.photoProof = idProof;

        user.photoProof = req.file?.path;
        const data = await authService.createUser(user);

        res.json({ status: 200, message: 'User Added successfully', data });
    } catch (error) {
        next(error)
    }
}

const loginUsers = async (req, res, next) => {
    try {
        const user = req.body;
        const data = await authService.loginUser(user);
        res.json({ status: 200, message: 'User logged in successfully', data });
    } catch (error) {
        next(error);
    }
}
const logoutUser = async (req, res) => {
    try {
        res.clearCookie();
    } catch (error) {
        next(error)
    }
}

module.exports = { signupUser, loginUsers }