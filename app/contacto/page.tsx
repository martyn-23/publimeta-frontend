export default function Contacto() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Contáctanos</h1>

      {/* Formulario */}
      <form className="space-y-4 bg-gray-100 p-6 rounded-lg shadow">
        <input
          type="text"
          placeholder="Nombre"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="tel"
          placeholder="Teléfono"
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          placeholder="Mensaje"
          className="w-full p-2 border rounded"
          rows={4}
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Enviar
        </button>
      </form>

      {/* Información de contacto */}
      <div className="mt-8 space-y-2">
        <p>📍 Dirección: Calle 15 #27-45, Villavicencio, Meta</p>
        <p>📞 Teléfono: +57 310 456 7890</p>
        <p>📧 Email: contacto@publimeta.com</p>
      </div>

      {/* Redes sociales */}
      <div className="mt-6 flex gap-4">
        <a href="https://facebook.com" className="text-blue-700">Facebook</a>
        <a href="https://instagram.com" className="text-pink-600">Instagram</a>
        <a href="https://linkedin.com" className="text-blue-500">LinkedIn</a>
      </div>
    </main>
  );
}
