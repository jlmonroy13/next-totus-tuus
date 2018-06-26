import React, { Component } from "react";

class About extends Component {
  render() {
    return (
        <div className="container container--large">
            <div className="grid">
                <div className="grid__item two-fifths about__description">
                    <div>
                        <h2 className="main__menu-text main__menu-text--blue-dark">¿Quienes somos?</h2>
                    </div>
                    <div className="about__description-text">
                        <p className="about__description-content">La revista TOTUS TUUS es un medio de
                        evangelización católico, creado con el anhelo de
                        llevar el amor de Dios a muchas personas. Se creó
                        en Colombia en la ciudad de Barranquilla en el año
                        2014 y su distribución es totalmente GRATIS.
                        </p>
                        <p className="about__description-content">Inicialmente se publicó cada dos meses de manera
                        impresa pero apartir del 2018 la revista es via
                        electronica.</p>
                        <p>Contamos con la bendición de la Arquidiócesis de
                        Barranquilla.</p>
                    </div>
                    <div className="about__description-image">
                    </div>
                </div>
                <div className="grid__item three-fifths">
                    <div className="about__presentation">
                        <div className="about__profile">
                            <img className="about__profile-image" src="/static/images/Jhoana.jpg" alt="Profile"></img>
                                <span className="about__profile-name">Jhovanna</span>
                        </div>
                        <div className="about__presentation-text">
                                <p className="about__presentation-text-first">Mi nombre es Jhovanna Rodríguez Rojas, soy Diseñadora
                                Gráfica de profesión de la Universidad del Norte y misionera
                                de la comunidad Lazos de Amor Mariano desde hace
                                aproximadamente 7 años. Nací en la ciudad de Bogotá el 31
                                de enero de 1991.</p>
                                <p className="about__presentation-text-first">Durante seis meses del año 2014, viví una experiencia de
                                servicio en la cual me dediqué totalmente a Dios y a la
                                evangelización a través de la Comunidad Lazos de Amor
                                Mariano; gracias a una misión que desarrollé en el
                                Departamento de Córdoba, nació en mi corazón la idea de
                                crear una revista católica que me permitiera utilizar mis
                                conocimientos y habilidades para la evangelización.</p>
                        </div>
                    </div>
                    <div className="about__image">
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default About;
