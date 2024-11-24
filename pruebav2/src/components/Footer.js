import React, { useState } from "react";
import './footer.css';

const Footer = () => {
    
    const [isOpen, setIsOpen] = useState({
        redes: false,
        siNosotros: false,
        donde: false,
        cliente: false,
        suscribete: false,
    });

   
    const toggleSection = (section) => {
        setIsOpen(prevState => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    return (
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    
                    <div className="sb__footer-links-div">
                        <h4 
                            onClick={() => toggleSection('redes')}
                            className={isOpen.redes ? 'open' : ''}
                        >
                            Redes Sociales
                        </h4>
                        {isOpen.redes && (
                            <>
                                <a href="#Whatapp">
                                    <p className={isOpen.redes ? 'open' : ''}>Whatapp</p>
                                </a>
                                <a href="#Instagram">
                                    <p className={isOpen.redes ? 'open' : ''}>Instagram</p>
                                </a>
                                <a href="#Facebook">
                                    <p className={isOpen.redes ? 'open' : ''}>Facebook</p>
                                </a>
                            </>
                        )}
                    </div>

        
                    <div className="sb__footer-links-div">
                        <h4 
                            onClick={() => toggleSection('siNosotros')}
                            className={isOpen.siNosotros ? 'open' : ''}
                        >
                            Porque si con Nosotros
                        </h4>
                        {isOpen.siNosotros && (
                            <>
                                <a href="#siNosotros">
                                    <p className={isOpen.siNosotros ? 'open' : ''}>Testimonios</p>
                                </a>
                                <a href="#siNosotros">
                                    <p className={isOpen.siNosotros ? 'open' : ''}>Desarrollo de empleos</p>
                                </a>
                            </>
                        )}
                    </div>

                    
                    <div className="sb__footer-links-div">
                        <h4 
                            onClick={() => toggleSection('donde')}
                            className={isOpen.donde ? 'open' : ''}
                        >
                            Donde Encontrarnos
                        </h4>
                        {isOpen.donde && (
                            <>
                                <a href="#donde">
                                    <p className={isOpen.donde ? 'open' : ''}>Encuentranos En: Lorem ipsum</p>
                                </a>
                            </>
                        )}
                    </div>

                    
                    <div className="sb__footer-links-div">
                        <h4 
                            onClick={() => toggleSection('cliente')}
                            className={isOpen.cliente ? 'open' : ''}
                        >
                            Servicio al cliente
                        </h4>
                        {isOpen.cliente && (
                            <>
                                <a href="#cliente">
                                    <p className={isOpen.cliente ? 'open' : ''}>llama: 3239214243</p>
                                </a>
                            </>
                        )}
                    </div>

                    <div className="sb__footer-links-div">
                        <h4 
                            onClick={() => toggleSection('suscribete')}
                            className={isOpen.suscribete ? 'open' : ''}
                        >
                            Suscribete a nuestro catalogo
                        </h4>
                        {isOpen.suscribete && (
                            <>
                                <a href="#suscribete">
                                    <p className={isOpen.suscribete ? 'open' : ''}>Suscribirse</p>
                                </a>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
