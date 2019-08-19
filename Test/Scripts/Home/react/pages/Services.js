import React from "react";
import services from "../data/services";
import Service from "../components/Service";

function Home() {
    return (
        <section className="services">
            <div className="page-wrapper">
                <div className="services__inner">
                    {services.map(item => {
                        return (
                            <Service
                                imgPath={item.imgPath}
                                title={item.title}
                                description={item.description}
                                key={item.id}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Home;
