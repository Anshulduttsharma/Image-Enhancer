import React from "react";

const ImageUpload = (props) => {
  const showImageHandler = (e) => {
    const file = e.target.files[0];
    if(file){
        props.uploadImageHandler(file)
    }
    //console.log(e.target.files);
    
  };
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl">
      <label
        htmlFor="fileInput"
        className="block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-all"
      >
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={showImageHandler}
        />
        <p>Click and drag to upload your image</p>
      </label>
    </div>
  );
};

export default ImageUpload;
