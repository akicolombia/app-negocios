'use client';
import { useState } from 'react';
import { negocios } from './data/negocios';

export default function Home() {
  const [busqueda, setBusqueda] = useState('');

  const negociosFiltrados = negocios.filter(negocio =>
    negocio.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    negocio.categoria.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)',
      padding: '2rem 1rem',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      {/* Header con buscador */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto 3rem',
        padding: '2rem',
        background: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '16px',
        boxShadow: '0 8px 32px rgba(31, 38, 135, 0.1)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255, 255, 255, 0.18)'
      }}>
        <h1 style={{
          color: '#2a4365',
          textAlign: 'center',
          marginBottom: '1.5rem',
          fontSize: '2.5rem',
          fontWeight: '600',
          background: 'linear-gradient(90deg, #2b6cb0, #4fd1c5)',
          WebkitBackgroundClip: 'text',
          color: 'transparent'
        }}>
          Directorio Comercial de Chía
        </h1>

        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          position: 'relative'
        }}>
          <input
            type="text"
            placeholder="🔍 Buscar negocio o categoría..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            style={{
              width: '100%',
              padding: '1rem 1rem 1rem 3rem',
              borderRadius: '50px',
              border: 'none',
              fontSize: '1rem',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              transition: 'all 0.3s ease'
            }}
          />
        </div>
      </div>

      {/* Grid de negocios */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        {negociosFiltrados.map((negocio) => (
          <div key={negocio.id} style={{
            background: 'rgba(255, 255, 255, 0.95)',
            padding: '2rem',
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(31, 38, 135, 0.1)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            ':hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 12px 28px rgba(0, 0, 0, 0.12)'
            }
          }}>
            <h3 style={{
              color: '#2b6cb0',
              marginBottom: '1rem',
              fontSize: '1.5rem',
              fontWeight: '600'
            }}>
              {negocio.nombre}
            </h3>
            
            <div style={{ marginBottom: '1rem' }}>
              <span style={{
                background: '#ebf8ff',
                color: '#3182ce',
                padding: '0.25rem 0.75rem',
                borderRadius: '50px',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}>
                {negocio.categoria}
              </span>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '0.75rem',
              color: '#4a5568'
            }}>
              <span style={{ marginRight: '0.5rem' }}>📍</span>
              {negocio.direccion}
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '0.75rem',
              color: '#4a5568'
            }}>
              <span style={{ marginRight: '0.5rem' }}>📞</span>
              {negocio.telefono}
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              color: '#4a5568'
            }}>
              <span style={{ marginRight: '0.5rem' }}>⏰</span>
              {negocio.horario}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}