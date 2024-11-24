import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';  
import './Header.css';
import UserIcon from '../icons/usuario.svg';
import CartIcon from '../icons/carrito-de-compras.svg'; 
import ShearchIcon from '../icons/busqueda.svg'; 
import { Cartcontents } from './Cartcontent'; // Importamos el contexto

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHombreOpen, setIsHombreOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);  // Contador de productos en el carrito
  const menuRef = useRef(null);
  const menuIconRef = useRef(null);

  const [cart] = useContext(Cartcontents);  // Accedemos al contexto del carrito

  useEffect(() => {
    // Calculamos la cantidad total de productos en el carrito
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    setCartCount(totalItems);
  }, [cart]); // Este effect se ejecutará cada vez que cart cambie

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target) && 
        menuIconRef.current && !menuIconRef.current.contains(e.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeMenu);

    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, []);

  const toggleHombreSection = () => {
    setIsHombreOpen((prevState) => !prevState);
  };

  return (
    <header className="header">
      <div className="menu-icon" onClick={toggleMenu} ref={menuIconRef}>
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className='oferta'>
        ¡El día de hoy tienes un 10% de descuento en las personas que compren 2 prendas!
      </div>
      <div className='icon-container'>
        <img src={ShearchIcon} alt="Icono de búsqueda" className='icon search-icon' />
        
        <Link to="/cart" className="cart-container">
          <img src={CartIcon} alt="Icono de carrito" className="cart-icon" />
          {cartCount > 0 && (
            <span className="cart-count">{cartCount}</span>
          )}
        </Link>


        <img src={UserIcon} alt="Icono de usuario" className='icon user-icon'/>
      </div>

      <nav className={`nav ${isMenuOpen ? 'active' : ''}`} ref={menuRef}>
        <div className="close-icon" onClick={() => setIsMenuOpen(false)}>
          <span className='close stysla-name'>Stysla</span>
          <span className='close close-icon-text'>&times;</span>
        </div>

        <ul>
          <li className="menu-item inicio"><a href="#home">Página de Inicio</a></li>
          <li className="menu-item hombre" onClick={toggleHombreSection}>
            <a href="#hombre">Hombre</a>
            {isHombreOpen && <div className="submenu-hombre">Contenido de Hombre</div>}
          </li>
          <li className="menu-item mujer"><a href="#woman">Mujer</a></li>
          <li className="menu-item niño"><a href="#child">Niño</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
