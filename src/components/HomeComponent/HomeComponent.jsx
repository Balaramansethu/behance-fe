import React, { useState, useEffect } from "react";
import "./HomeComponent.css";
import images from "../../data/data.js";

const HomeComponent = ({ sortOption, searchTerm }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [captionText, setCaptionText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [filteredImages, setFilteredImages] = useState(images);

  useEffect(() => {
    if (searchTerm) {
      const filtered = images.filter((image) =>
        image.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredImages(filtered);

      const uniqueAuthors = [...new Set(filtered.map((image) => image.author))];
      setSuggestions(uniqueAuthors);
    } else {
      setFilteredImages(images);
      setSuggestions([]);
    }
  }, [searchTerm]);

  useEffect(() => {
    const sortedImages = [...filteredImages];
    if (sortOption === "likes") {
      sortedImages.sort((a, b) => b.likes - a.likes);
    } else if (sortOption === "views") {
      sortedImages.sort((a, b) => b.views - a.views);
    }
    setFilteredImages(sortedImages);
  }, [sortOption]);

  const handleImageClick = (src, author) => {
    setModalVisible(true);
    setModalImageSrc(src);
    setCaptionText(author);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setModalImageSrc("");
    setCaptionText("");
  };

  return (
    <div className="image-container">
      <div className="image-card">
        {filteredImages.map((image, index) => (
          <div className="image-item" key={index}>
            <div className="image-header">
              <img
                src={image.src}
                alt={`Image ${index + 1}`}
                onClick={() => handleImageClick(image.src, image.author)}
              />
              <div className="icons">
                <span className="author-name">{image.author}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-hand-thumbs-up-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                </svg>
                <span>{image.likes}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-eye-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8-4.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z" />
                </svg>
                <span>{image.views+'k'}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {modalVisible && (
        <div className="modal" onClick={handleCloseModal}>
          <span className="close" onClick={handleCloseModal}>
            x
          </span>
          <img className="modal-content" src={modalImageSrc} alt="Modal" />
          <div className="caption">{captionText}</div>
        </div>
      )}
    </div>
  );
};

export default HomeComponent;
