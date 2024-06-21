import React from "react";
import image1 from "../../assets/images/img1.png";
import image2 from "../../assets/images/img2.png";
import image3 from "../../assets/images/img3.png";
import image4 from "../../assets/images/img4.png";
import image5 from "../../assets/images/img5.png";
import image6 from "../../assets/images/img6.png";
import image7 from "../../assets/images/img7.png";
import image8 from "../../assets/images/img8.png";
import image9 from "../../assets/images/img9.png";
import image10 from "../../assets/images/img10.png";
import image11 from "../../assets/images/img11.png";
import image12 from "../../assets/images/img12.png";
import "../HomeComponent/HomeComponent.css";

const images = [
  { src: image1, author: "hincha" },
  { src: image2, author: "posterlife" },
  { src: image3, author: "pickpak" },
  { src: image4, author: "niturs" },
  { src: image5, author: "falhead 5" },
  { src: image6, author: "greham" },
  { src: image7, author: "goldkins" },
  { src: image8, author: "torvi" },
  { src: image9, author: "valahala" },
  { src: image10, author: "nixo" },
  { src: image11, author: "detunty" },
  { src: image12, author: "ted bundy" },
];

const HomeComponent = () => {
  return (
    <div className="image-container">
      <div className="image-card">
        {images.map((image, index) => (
          <div className="image-item" key={index}>
            <div className="image-header">
            <img src={image.src} alt={`Image ${index + 1}`} />
            
              <div className="icons">
              <span className="author-name">{image.author}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                  <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                </svg>
              </div>
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeComponent;
