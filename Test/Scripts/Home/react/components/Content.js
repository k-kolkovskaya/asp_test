import React from "react";
import Competency from "./Competency";

function Content(props) {
  return (
    <section className="competencies">
      <div className="page-wrapper">
        <div className="competencies__inner">
          {props.competencies.map(item => {
            return <Competency imgPath={item.imgPath} title={item.title} description={item.description} key={item.id} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Content;
