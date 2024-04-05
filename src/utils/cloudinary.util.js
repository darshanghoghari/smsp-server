// Import the Cloudinary SDK
const cloudinary = require('cloudinary').v2;

// Configure Cloudinary with your credentials
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

// Function to upload an image to Cloudinary
const uploadImage = (filePath) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(filePath, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};

// Function to upload a video to Cloudinary
const uploadVideo = (filePath) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(filePath, { resource_type: 'video' }, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};

// Usage examples
const imageFilePath = 'path_to_your_image.jpg';
const videoFilePath = 'path_to_your_video.mp4';

uploadImage(imageFilePath)
    .then((result) => {
        console.log('Image uploaded successfully:', result);
    })
    .catch((error) => {
        console.error('Error uploading image:', error);
    });

uploadVideo(videoFilePath)
    .then((result) => {
        console.log('Video uploaded successfully:', result);
    })
    .catch((error) => {
        console.error('Error uploading video:', error);
    });


module.exports = { uploadImage, uploadVideo }
// const { v2 } = require('cloudinary');
// const fs = require('fs');
// const cloudinary = v2;

// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.API_KEY,
//     api_secret: process.env.API_SECRET
// });

// const uploadOnCloudinary = async (localFilePath) => {
//     try {
//         if (!localFilePath) return null
//         //upload the file on cloudinary
//         const response = await cloudinary.uploader.upload(localFilePath, {
//             resource_type: "auto"
//         })
//         // file has been uploaded successfull
//         //console.log("file is uploaded on cloudinary ", response.url);
//         fs.unlinkSync(localFilePath)
//         return response;

//     } catch (error) {
//         fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
//         return null;
//     }
// }



// module.exports = { uploadOnCloudinary } 