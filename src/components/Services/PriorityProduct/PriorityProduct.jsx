import './PriorityProduct.css'

export default function PriorityProduct() {
  return (
    <div className="priority-product-container">
      <div className="priority-content">
        <div className="priority-text">
          <h2 className="priority-title">Producto Estrella</h2>
          <div className="priority-description">
            <h3>Sistema de Gestión Empresarial Kinasis ERP</h3>
            <p>
              Nuestra solución estrella integra todos los procesos de tu empresa en una única plataforma. 
              Desde gestión de inventarios, ventas, compras, hasta recursos humanos y contabilidad.
            </p>
            <ul>
              <li>✓ Automatización de procesos</li>
              <li>✓ Reportes en tiempo real</li>
              <li>✓ Integración con sistemas existentes</li>
              <li>✓ Soporte 24/7</li>
            </ul>
            <button className="priority-cta">Conocer más</button>
          </div>
        </div>
        <div className="priority-image">
          <div className="priority-card">
            <img src="/placeholder-product.jpg" alt="Producto estrella" />
          </div>
        </div>
      </div>
    </div>
  )
}