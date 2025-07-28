import { negocios } from './data/negocios';

export default function Home() {
  return (
    <div style={{ 
      padding: '2rem', 
      background: '#F9FAFB',
      minHeight: '100vh'
    }}>
      <h1 style={{ 
<<<<<<< HEAD
        color: '#eb8b25ff', 
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
        Directorio Comercial De Chia -
        Todo lo que necesitas en un mismo lugar
      </h1>

      {negocios.map((negocio) => (
        <div key={negocio.id} style={{ 
          background: '#FFFFFF',
          padding: '1.5rem',
          margin: '1rem 0',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#2563EB', marginBottom: '0.5rem' }}>
            {negocio.nombre}
          </h3>
          <p><strong style={{ color: '#EA580C' }}>Categoría:</strong> {negocio.categoria}</p>
          <p><strong style={{ color: '#EA580C' }}>Dirección:</strong> {negocio.direccion}</p>
          <p><strong style={{ color: '#EA580C' }}>Teléfono:</strong> {negocio.telefono}</p>
          <p><strong style={{ color: '#EA580C' }}>Horario:</strong> {negocio.horario}</p>
        </div>
      ))}
    </div>
  );
<<<<<<< HEAD
}git status
git add .
git add app/page.js app/data/negocios.js
git commit -m "Agregando archivos iniciales"
git push origin main
app-negocios/
├── app/
│   ├── page.js
│   └── data/
│       └── negocios.js
├── package.json
=======
}
>>>>>>> 600a26d104c6951e7dd424e9f36fa601f4a3fa9c
