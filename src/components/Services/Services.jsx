import './Services.css'

const servicesData = [
  {
    id: 1,
    title: 'Desarrollo Web',
    description: 'Aplicaciones web modernas y escalables',
    icon: '🌐'
  },
  {
    id: 2,
    title: 'Desarrollo Móvil',
    description: 'Apps nativas e híbridas iOS/Android',
    icon: '📱'
  },
  {
    id: 3,
    title: 'Cloud Solutions',
    description: 'Infraestructura en la nube AWS/Azure',
    icon: '☁️'
  },
  {
    id: 4,
    title: 'Consultoría IT',
    description: 'Asesoramiento tecnológico experto',
    icon: '💡'
  }
]

export default function Services() {
  return (
    <div className="services-container">
      <h2 className="services-title">Lo que hemos desarrollado</h2>
      <div className="services-grid">
        {servicesData.map(service => (
          <div key={service.id} className="service-card-horizontal">
            <div className="service-icon">{service.icon}</div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}