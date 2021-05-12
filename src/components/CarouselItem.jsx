//Importando react
import React from 'react';
//Importando estilos
import '../assets/styles/components/CarouselItem.scss';
//Importando imagenes
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

//Creando componente
const CarouselItem = () => {
    return (  
        <div className="carousel-item">
        <img className="carousel-item__img" src="https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""  />
        <div className="carousel-item__details">
          <div>             
            <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" />
            <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon" />
          </div>
          <p className="carousel-item__details--title">Título descriptivo</p>
          <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
        </div>
      </div>
    );
}


//Exportando componente
export default CarouselItem;