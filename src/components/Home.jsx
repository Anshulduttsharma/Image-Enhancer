import React, { useState } from "react";
import ImagePreview from "./ImagePreview";
import ImageUpload from "./ImageUpload";
import { enhancedImageApi } from "../utils/EnhancedImageApi";


const Home = () => {
  const [upload, setUpload] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadImageHandler = async (file) => {
    setUpload(URL.createObjectURL(file));
    setLoading(true);

    try {
      //code which may produce errors
      const enhancedUrl = await enhancedImageApi(file);
      setEnhancedImage(enhancedUrl);
      setLoading(false);
    } catch (error) {
      //code to handle the error and show message
      console.error(error);
      console.log("Error while enhancing the image. Please try again later.");
    }
  };

  return (
    <>
      <ImageUpload uploadImageHandler={uploadImageHandler} />
      <ImagePreview
        loading={loading}
        uploaded={upload}
        enhanced={enhancedImage?.image}
      />
    </>
  );
};

export default Home;
