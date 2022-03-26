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


    _sendImageToServer = (image) => {
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', this._uploadPreset);

        return this.defaultAxiosInstance.post(this._apiLink, formData);
    };

    _collectAllImagePromises = (_imageDataPromise) => {
        [...this._selectedImages].forEach(selectedImage => {
            _imageDataPromise.push(this._sendImageToServer(selectedImage));
        });
    }

    postImageAndReceiveData = () => {
        const imageDataPromises = [];
        this._collectAllImagePromises(imageDataPromises);

        return Promise.allSettled([...imageDataPromises]).then(photos => photos).catch((err) => {
            throw new Error(`Some of images don't received! Error: ${err}`);
        });
    }

}