import React from "react";

function Service(props) {
    return (
        <div className="services__item">
            <img src={props.imgPath} alt="logo" className="services__image" />
            <h1 className="services__title">{props.title}</h1>
            <p className="services__description">{props.description}</p>
        </div>
    );
}

export default Service;