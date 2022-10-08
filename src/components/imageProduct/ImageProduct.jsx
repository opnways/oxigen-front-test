import React from "react";

export function ImageProduct(imageInfo) {
  return <img src={imageInfo.imageData} alt={imageInfo.altImage} />;
}
