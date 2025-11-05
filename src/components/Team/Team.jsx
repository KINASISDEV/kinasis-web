import team from "../../data/team.json";
import "./Team.css"


export default function TeamSection() {
  return (
    <section className="team-container">
      <h2 className="title-aboutUs">Nuestro equipo</h2>
      <p className="parrafo">
        Información adicional sobre nosotros, quienes somos y el rol que desempeñamos en la empresa.
        Cómo surgió la idea, la organización que tenemos y más. <br />
        Nuestros nombres y qué papel desempeñamos, etc.
      </p>

      <div className="container-image">
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((miembro, index) => (
              <div
                key={index}
                className={
                  "Banner about-section card flex flex-col items-center text-center p-6 rounded-3xl shadow-xl transition-transform transform hover:-translate-y-2"
                }
              >
                <img
                  src={miembro.foto}
                  alt={miembro.nombre}
                  className="w-40 h-40 rounded-full border-4 border-white shadow-md mb-3"
                  loading="lazy"
                />
                <h3 className="font-bold text-lg">{miembro.nombre}</h3>
                <p className="text-sm opacity-90">{miembro.frase}</p>
                <p className="mt-1 text-xs opacity-80">
                  {Array.isArray(miembro.roles) ? miembro.roles.join(" / ") : miembro.roles}
                </p>
                

                <div className="flex grid-cols-4 gap-3 justify-center mt-3">
                    <a className="text-xs mt-1" href={miembro.portafolio} target="_blank" rel="noopener noreferrer"><img src="../../../public/portafolio.png" alt="portafoliio" /></a>
                    <a className="text-xs mt-1" href={miembro.linkedin} target="_blank" rel="noopener noreferrer">
                        <img src="../../../public/linkedin.png" alt="linkedin"></img>
                    </a>
                    <a className="text-xs mt-1" href={miembro.github} target="_blank" rel="noopener noreferrer">
                        <img src="../../../public/github.png" alt="github"></img>
                    </a>
                    <a className="text-xs mt-1" href={miembro.cv} target="_blank" rel="noopener noreferrer">
                        <img src="../../../public/cv.png" alt="cv"></img>
                    </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}