import React from "react";
import ImagePreview from "./ImagePreview";
import ImageUpload from "./ImageUpload";

const Home = () => {
  return (
    <div>
      <ImageUpload />
      <ImagePreview />
    </div>
  );
};

export default Home;
