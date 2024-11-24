import React, { useContext, useState } from "react";
import './carrito.css';
import { Cartcontents } from "./Cartcontent";  
import imgprueba1 from '../assets/img/imgprueba1.jpg';
import imgprueba from '../assets/img/imgprueba.jpg';
import imgprueba2 from '../assets/img/imgprueba2.jpg';
import imgprueba3 from '../assets/img/imgprueba3.jpg';
import imgprueba4 from '../assets/img/imgprueba4.jpg';
import imgprueba5 from '../assets/img/imgprueba5.jpg';
import { Link } from "react-router-dom";

export const Carrito = () => {

  const [cart, setCart] = useContext(Cartcontents);
  const [coupon, setCoupon] = useState(""); 

  
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const imagenes = {
    imgprueba,
    imgprueba1,
    imgprueba2,
    imgprueba3,
    imgprueba4,
    imgprueba5
  };


  const handleCouponChange = (event) => {
    setCoupon(event.target.value);
  };

 
  const applyCoupon = () => {
    if (coupon === "DESCUENTO10") {
      alert("Cupón aplicado: 10% de descuento");
      
    } else {
      alert("Cupón inválido");
    }
  };

  return (
    <div className="cart-container">
      <div>
        <h1 className="tit">Estos son tus productos en el carrito</h1>

        
        {cart.length === 0 ? (
          <center><p>Tu carrito está vacío.</p></center>
        ) : (
          <div className="cart-items">
            {cart.map((product) => (
              <div key={product.id} className="cart-item">
                <div className="cart-item-card">
                  <img
                    src={imagenes[product.imagen] || imgprueba1} 
                    alt={product.nombre}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <p>Nombre: {product.nombre}</p>
                    <p>Precio: ${product.Precio}</p>
                    <p>Sku: {product.sku}</p>
                    <p>Und: {product.quantity}</p>
                    <button onClick={() => removeFromCart(product.id)}>
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

       
        
      </div>
      <div className="coupon-section">
          <h3 className="cuopontext">¿Tienes un cupón de descuento?</h3>
          <input 
            type="text" 
            value={coupon} 
            onChange={handleCouponChange} 
            placeholder="Ingresa tu cupón" 
            className="coupon-input"
          />
          <button onClick={applyCoupon} className="apply-coupon-button">
            Aplicar cupón
          </button>
          <div className="back">
          <Link to="/">
            <center><button>Volver al Inicio</button></center>
          </Link>
        </div>
        </div>

        
    </div>
    
  );
};
