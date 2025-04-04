import React, { useState } from "react";
import ImagePreview from "./ImagePreview";
import ImageUpload from "./ImageUpload";

const Home = () => {
  const [upload, setUpload] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadImageHandler = async (file) => {
    setUpload(URL.createObjectURL(file));
    setLoading(true);

    try {
      //code which may produce errors
    } catch (error) {
      //code to handle the error and show message
    }
  };

  return (
    <>
      <ImageUpload uploadImageHandler={uploadImageHandler} />
      <ImagePreview
        loading={loading}
        uploaded={upload}
        enhanced={enhancedImage}
      />
    </>
  );
};

export default Home;
