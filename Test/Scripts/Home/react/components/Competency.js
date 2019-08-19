import React from "react";

function Competency(props) {
  return (
      <div className="competencies__item">
          <div className="competencies__image">
              <img src={props.imgPath} alt="logo" />
          </div>
          <h1 className="competencies__title">{props.title}</h1>
          <p className="competencies__description">{props.description}</p>
    </div>
  );
}

export default Competency;
