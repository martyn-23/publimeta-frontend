export default function Home() {
  return (
    <div>
      {/* Banner */}
      <section className="bg-blue-600 text-white text-center py-20 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold">Tu publicidad, nuestra meta</h2>
        <p className="mt-4 text-lg">Impulsamos tu negocio en Villavicencio</p>
      </section>

      {/* Descripción */}
      <section className="mt-12 text-center">
        <h3 className="text-2xl font-semibold">¿Quiénes somos?</h3>
        <p className="mt-4 text-gray-700">
          En Publimeta S.A.S ofrecemos soluciones de publicidad digital y tradicional
          con más de 10 años de experiencia en el sector. Nuestro objetivo es que
          tu marca sea vista en Villavicencio y toda la región.
        </p>
      </section>

      {/* Servicios destacados */}
      <section className="mt-12">
        <h3 className="text-2xl font-semibold text-center">Servicios Destacados</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-6 bg-white shadow rounded-lg text-center">
            <h4 className="text-black font-bold">Publicidad Digital</h4>
            <p className="text-black mt-2">Campañas en redes sociales y marketing digital.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg text-center">
            <h4 className="text-black font-bold">Vallas Publicitarias</h4>
            <p className="text-black mt-2">Ubicaciones estratégicas en Villavicencio.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg text-center">
            <h4 className="text-black font-bold">Diseño Gráfico</h4>
            <p className="text-black mt-2">Logotipos, branding y material corporativo.</p>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="mt-12">
        <h3 className="text-2xl font-semibold text-center">Lo que dicen nuestros clientes</h3>
        <div className="mt-6 flex flex-col md:flex-row gap-6 justify-center">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <p className="text-black">"Gracias a Publimeta, nuestras ventas crecieron un 40% en 3 meses."</p>
            <span className="text-black block mt-2 font-semibold">- Cliente 1</span>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <p className="text-black">"La mejor empresa de publicidad en Villavicencio, muy recomendados."</p>
            <span className="text-black block mt-2 font-semibold">- Cliente 2</span>
          </div>
        </div>
      </section>
    </div>
  );
}
