import { useState } from 'react'
import './Products.css'
import productsData from './products.json'

export default function Products() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % productsData.length)
  }
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + productsData.length) % productsData.length)
  }

  return (
    <div className="products-container">
      <h2 className="products-title">Productos Desarrollados</h2>
      
      <div className="products-carousel">
        <button className="carousel-btn prev" onClick={prevSlide}>‹</button>
        
        <div className="carousel-track">
          {productsData.map((product, index) => (
            <div
              key={product.id}
              className={`product-card ${index === currentIndex ? 'active' : ''}`}
              style={{
                transform: `translateX(${(index - currentIndex) * 110}%)`,
                opacity: index === currentIndex ? 1 : 0.3
              }}
            >
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <span className="product-tech">{product.technology}</span>
              </div>
            </div>
          ))}
        </div>
        
        <button className="carousel-btn next" onClick={nextSlide}>›</button>
      </div>
      
      <div className="carousel-dots">
        {productsData.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}