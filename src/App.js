import { useState } from "react";
import "./style.css";

// Import Images

import nature1 from "./images/Nature1.jpg";
import nature2 from "./images/Nature2.jpg";
import nature3 from "./images/Nature3.jpg";

import travel1 from "./images/travel1.jpg";
import travel2 from "./images/travel2.jpg";
import travel3 from "./images/travel3.jpg";

import animal1 from "./images/animal1.jpg";
import animal2 from "./images/animal2.jpg";
import animal3 from "./images/animal3.jpg";

import food1 from "./images/food1.jpg";
import food2 from "./images/food2.jpg";
import food3 from "./images/food3.jpg";

function App() {

  const [images, setImages] = useState([

    {
      id: 1,
      title: "Sunrise",
      category: "Nature",
      url: nature1
    },

    {
      id: 2,
      title: "Blossom Bliss",
      category: "Nature",
      url: nature2
    },

    {
      id: 3,
      title: "Flowers and bees",
      category: "Nature",
      url: nature3
    },

    {
      id: 4,
      title: "Japan dairies",
      category: "Travel",
      url: travel1
    },

    {
      id: 5,
      title: "China Heritage",
      category: "Travel",
      url: travel2
    },

    {
      id: 6,
      title: "Maldvies beaches",
      category: "Travel",
      url: travel3
    },

    {
      id: 7,
      title: "Cute puppy eyes",
      category: "Animal",
      url: animal1
    },

    {
      id: 8,
      title: "Eat, sleep, panda repeat",
      category: "Animal",
      url: animal2
    },

    {
      id: 9,
      title: "Gentle giant",
      category: "Animal",
      url: animal3
    },

    {
      id: 10,
      title: "Love at first bite",
      category: "Food",
      url: food1
    },

    {
      id: 11,
      title: "Warm bowl, warm soul",
      category: "Food",
      url: food2
    },

    {
      id: 12,
      title: "Burger therapy",
      category: "Food",
      url: food3
    }

  ]);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // Add Image

  const handleAddImage = () => {

    if (
      title.trim() === "" ||
      category.trim() === "" ||
      imageUrl.trim() === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    const newImage = {
      id: images.length + 1,
      title: title,
      category: category,
      url: imageUrl
    };

    setImages([...images, newImage]);

    setTitle("");
    setCategory("");
    setImageUrl("");
  };

  // Delete Image

  const handleDelete = (id) => {

    const updatedImages = images.filter(
      (image) => image.id !== id
    );

    setImages(updatedImages);
  };

  return (
    <div className="container">

      <h1 className="heading">
        Dynamic Image Gallery
      </h1>

      {/* Input Section */}

      <div className="input-box">

        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          type="text"
          placeholder="Paste Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <button onClick={handleAddImage}>
          Add Image
        </button>

      </div>

      {/* Gallery */}

      <div className="gallery">

        {images.map((image) => (

          <div className="card" key={image.id}>

            <img
              src={image.url}
              alt={image.title}
            />

            <div className="card-content">

              <h3>{image.title}</h3>

              <p>{image.category}</p>

              <button
                className="delete-btn"
                onClick={() => handleDelete(image.id)}
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default App;