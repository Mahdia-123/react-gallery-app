import React from "react";
import "./Photos.css";
export default function Photos(props) {
  if (props.photos) {
    console.log(props.photos);
    return (
      <section className="photo">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-12 col-md-4 " key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  {" "}
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt={
                      photo.photographer
                        ? `Photo by ${photo.photographer}`
                        : "Photo"
                    }
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
