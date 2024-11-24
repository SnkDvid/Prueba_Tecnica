import React, { useContext } from "react"; 
import './body.css';
import productos from './productos.json';
import imgprueba1 from '../assets/img/imgprueba1.jpg';
import imgprueba from '../assets/img/imgprueba.jpg';
import imgprueba2 from '../assets/img/imgprueba2.jpg';
import imgprueba3 from '../assets/img/imgprueba3.jpg';
import imgprueba4 from '../assets/img/imgprueba4.jpg';
import imgprueba5 from '../assets/img/imgprueba5.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Cartcontents } from "./Cartcontent";  


const Body = () => {
  const [cart, setCart] = useContext(Cartcontents);  

 
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 7000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 68,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 80,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const imagenes = {
    imgprueba,
    imgprueba1,
    imgprueba2,
    imgprueba3,
    imgprueba4,
    imgprueba5
  };

  const agregarCarrito = (id, Precio) => {
    setCart((currItems) => {
      
      const producto = productos.find((product) => product.id === id);
  
      
      const isItemsFound = currItems.find((item) => item.id === id);
  
      if (isItemsFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { 
              ...item, 
              quantity: item.quantity + 1 
            };
          } else {
            return item;
          }
        });
      } else {
       
        return [
          ...currItems,
          { 
            id, 
            quantity: 1, 
            Precio, 
            nombre: producto.nombre,
            sku: producto.sku,
            imagen: producto.imagen 
          }
        ];
      }
    });
  };
  

  

  return (
    <div className="w-full m-auto px-4">
      <div className="mt-10">
        <Slider {...settings}>
          {productos.map((producto, idx) => (
            <div key={idx} className="bg-white text-black rounded-xl p-2">
              <div className="h-[300px] md:h-[500px] w-full mx-auto rounded-xl bg-indigo-500 flex justify-center items-center">
                <img
                  src={imagenes[producto.imagen] || imgprueba1}
                  className="h-full w-full  rounded-xl"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="text-xl font-semibold">{producto.nombre}</p>
                <p>{producto.sku}</p>
                <p>{producto.Precio}</p>
                <button
                  className="bg-gray-500 text-white text-lg px-6 py-1 rounded-xl"
                  onClick={() => agregarCarrito(producto.id, producto.Precio)}  
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Body; 
