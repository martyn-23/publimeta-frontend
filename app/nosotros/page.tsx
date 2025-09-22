export default function Nosotros() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Sobre Nosotros</h1>

      {/* Historia */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Nuestra Historia</h2>
        <p>
          Publimeta S.A.S nació en Villavicencio con el objetivo de transformar
          la forma en que las empresas locales comunican sus marcas. Con más de
          10 años de experiencia en publicidad digital y tradicional, hemos
          ayudado a decenas de negocios a posicionarse y conectar con sus
          clientes.
        </p>
      </section>

      {/* Misión, Visión y Valores */}
      <section className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Misión</h2>
          <p>
            Brindar soluciones publicitarias creativas y efectivas para impulsar
            el crecimiento de nuestros clientes.
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Visión</h2>
          <p>
            Ser reconocidos como la agencia líder en publicidad en los Llanos
            Orientales.
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Valores</h2>
          <ul className="list-disc list-inside">
            <li>Creatividad</li>
            <li>Compromiso</li>
            <li>Innovación</li>
            <li>Responsabilidad</li>
          </ul>
        </div>
      </section>

      {/* Foto de equipo */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Nuestro Equipo</h2>
        <img
          src="https://via.placeholder.com/800x400"
          alt="Equipo Publimeta"
          className="rounded-lg shadow mx-auto"
        />
      </section>
    </main>
  );
}
