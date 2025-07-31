import { negocios } from 'negocios.js'
export default function Home() {
  return (
    <main>
      <h1>Negocios Locales</h1>
      <ul>
        {negocios.map((negocio) => (
          <li key={negocio.id}>
            {negocio.nombre} - {negocio.direccion}
          </li>
        ))}
      </ul>
    </main>
  )
}
