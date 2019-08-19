import React from "react";
import Competency from "../components/Competency";
import competencies from "../data/competencies";

function Home() {
    return (
        <section className="competencies">
            <div className="page-wrapper">
                <div className="competencies__inner">
                    {competencies.map(item => {
                        return <Competency imgPath={item.imgPath} title={item.title} description={item.description} key={item.id} />;
                    })}
                </div>
            </div>
        </section>
    );
}

export default Home;
