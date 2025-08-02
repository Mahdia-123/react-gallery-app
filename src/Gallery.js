import React, { useState } from "react";
import Photos from "./Photos";
import "./Gallery.css";
import axios from "axios";

export default function Gallery() {
  const [keyWord, setKeyWord] = useState("");
  const [photos, setPhotos] = useState(null);

  function handlePexelResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let pexelApiKey = "8tc45bb70811ad02c7716f84fe4ocbe3";
    let pexelApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyWord}&key=${pexelApiKey}`;
    axios.get(pexelApiUrl).then(handlePexelResponse);
    console.log(pexelApiUrl);
  }

  function handleKeywordChange(event) {
    event.preventDefault();
    setKeyWord(event.target.value);
  }

  return (
    <div className="Gallery">
      <section>
        <h1>What photo do you want to look up?</h1>
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Enter a Word.."
            onChange={handleKeywordChange}
          />
          <button className="btn" type="submit">
            Search
          </button>
        </form>
        <div className="Hint">Suggested Words: honey, flower, yoga...</div>
      </section>
      <Photos photos={photos} />
    </div>
  );
}
