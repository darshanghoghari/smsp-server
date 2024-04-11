// Import the Cloudinary SDK
const cloudinary = require('cloudinary').v2;
const path = require('path');

// Configure Cloudinary with your credentials
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

// Function to upload an image to Cloudinary
const uploadImage = (filePath) => {
    const filename = path.basename(filePath);
    const folderName = 'Smsp Image Folder';
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(filePath, { public_id: `${folderName}/${filename}` }, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};

// Function to upload a video to Cloudinary
// const uploadVideo = (filePath) => {
//     return new Promise((resolve, reject) => {
//         cloudinary.uploader.upload(filePath, { public_id: `${folderName}/${filename}` }, { resource_type: 'video' }, (error, result) => {
//             if (error) {
//                 reject(error);
//             } else {
//                 resolve(result);
//             }
//         });
//     });
// };

// Usage examples

// uploadImage(imageFilePath)
//     .then((result) => {
//         console.log('Image uploaded successfully:', result);
//     })
//     .catch((error) => {
//         console.error('Error uploading image:', error);
//     });

// uploadVideo(videoFilePath)
//     .then((result) => {
//         console.log('Video uploaded successfully:', result);
//     })
//     .catch((error) => {
//         console.error('Error uploading video:', error);
//     });


module.exports = { uploadImage }
