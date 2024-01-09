import './style.scss' ;
import {AddSquare, DocumentUpload, Trash} from "iconsax-react";
import React, {useCallback, useState} from "react";
import {useDropzone} from "react-dropzone";


const Uploader = () => {
    const {
        getRootProps, getInputProps, isDragActive,
    } = useDropzone({onDrop});
    const [selectedImages, setSelectedImages] = useState([]);

    const onDrop = useCallback((acceptedFiles,) => {
        acceptedFiles.forEach((file) => {
            setSelectedImages((prevState) => [...prevState, file]);
        });
    }, []);

    let removeImage = (key) => {
        const _images = selectedImages.filter((s, i) => i != key);
        setSelectedImages(_images);
    };

    return(
        <>
            <div className="input">
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {isDragActive ? (<div className="drop__zone__box">
                        <AddSquare size={50} color="#ccc"/>
                        فایل خود را اینجا قرار دهید
                    </div>) : (<DocumentUpload/>)}
                </div>
            </div>

            <div className="module">
                {selectedImages.length > 0 && (<div className="box">
                    {selectedImages.map((image, index) => {
                        return (
                            <div className="image" key={index}>
                            <img
                                src={`${URL.createObjectURL(image)}`}
                                width={80}

                                alt=""
                            />
                            <div className="image-box">
                                <p>{image.path}</p>
                                <p>{image.size}</p>
                            </div>
                            <button
                                onClick={() => removeImage(index)}
                                className="btn-submit"
                            >
                                {" "}
                                <Trash/>
                            </button>
                        </div>);
                    })}
                    <input type="text" className="outline-0 border-1 bg-amber-50 box__upload__input "
                           placeholder={'متن خود را وارد کنید'}/>
                    <button className="btn-submit"> ارسال</button>
                </div>)}
            </div>
        </>
    )
}
export default Uploader;