import axios from 'axios';

export class CloudinaryService {
    _uploadPreset;
    _apiLink;
    _selectedImages;

    constructor(uploadPreset, apiLink, selectedImages) {
        this._apiLink = apiLink;
        this._uploadPreset = uploadPreset;
        this._selectedImages = selectedImages;
    };

    defaultAxiosInstance = axios.create();

    /*
    *   @description - Generates data in form structure, send data to cloudinary, and returns Promise pending promise.
    *   @params {string} -  image to upload.
    *   @returns {Promise} - Promise with image data.
    */
    _sendImageToServer = (image) => {
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', this._uploadPreset);

        return this.defaultAxiosInstance.post(this._apiLink, formData);
    };

    /*
    *   @description - Collect all pendings image promises and push it to selected array variable.
    *   @params {Array} - Array, where we want to put all pending promises.
    *   @returns {Void} - There is no returns.
    */
    _collectAllImagePromises = (_imageDataPromise) => {
        [...this._selectedImages].forEach(selectedImage => {
            _imageDataPromise.push(this._sendImageToServer(selectedImage));
        });
    }

    /*
    *   @description - function with incapsulated logic. Takes data from constructor, post images to cloud & receive data.
    *   @returns {Void} - all pending image promises. The are only avaliable, if all promises received.
    */
    postImageAndReceiveData = () => {
        const imageDataPromises = [];
        this._collectAllImagePromises(imageDataPromises);

        return Promise.allSettled([...imageDataPromises]).then(photos => photos).catch((err) => {
            throw new Error(`Some of images don't received! Error: ${err}`);
        });
    }

}