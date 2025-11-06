import team from "./Team.json";
import "./Team.css"



export default function TeamSection() {
  return (
    <section className="team-container">
      <div className="container-image">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((miembro, index) => (
            <div
              key={index}
              className="liquid-card card flex flex-col items-center text-center p-8 rounded-3xl shadow-2xl transition-transform transform hover:-translate-y-3"
            >
              <div className="flex items-start justify-center h-56 mb-4">
                <img
                  src={miembro.foto}
                  alt={miembro.nombre}
                  className="w-36 h-36 rounded-full border-4 border-white shadow-lg object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-bold text-9xl">{miembro.nombre}</h3>
              <p className="text-base opacity-90">{miembro.frase}</p>
              <p className="mt-1 text-sm opacity-80">
                {Array.isArray(miembro.roles) ? miembro.roles.join(" / ") : miembro.roles}
              </p>

              <div className="flex grid-cols-4 gap-4 justify-center mt-4 icon-container">
                <a href={miembro.portafolio} target="_blank" rel="noopener noreferrer">
                  <div className="icon-wrapper">
                    <img src="./portafolio.png" alt="portafolio" />
                  </div>
                </a>
                <a href={miembro.linkedin} target="_blank" rel="noopener noreferrer">
                  <div className="icon-wrapper">
                    <img src="./linkedin.png" alt="linkedin" />
                  </div>
                </a>
                <a href={miembro.github} target="_blank" rel="noopener noreferrer">
                  <div className="icon-wrapper">
                    <img src="./github.png" alt="github" />
                  </div>
                </a>
                <a href={miembro.cv} target="_blank" rel="noopener noreferrer">
                  <div className="icon-wrapper">
                    <img src="./cv.png" alt="cv" />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
