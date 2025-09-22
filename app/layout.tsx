import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Publimeta S.A.S",
  description: "Publicidad en Villavicencio - Digital y Tradicional",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="font-sans bg-gray-50 text-gray-800">
        {/* Navbar */}
        <header className="bg-blue-700 text-white p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Publimeta S.A.S</h1>
            <ul className="flex space-x-6">
              <li><Link href="/">Inicio</Link></li>
              <li><Link href="/servicios">Servicios</Link></li>
              <li><Link href="/contacto">Contacto</Link></li>
              <li><Link href="/nosotros">Nosotros</Link></li>
            </ul>
          </nav>
        </header>

        <main className="container mx-auto p-6">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center p-4 mt-12">
          <p>© 2025 Publimeta S.A.S - Villavicencio, Meta</p>
        </footer>
      </body>
    </html>
  );
}
