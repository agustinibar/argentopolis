import React, { useState } from 'react';
import styles from '../Tablero/tablero.module.css';
import Dados from '../Dados/Dados';

const Tablero = () => {
  const numJugadores = 4;
  const [posicionesUsuarios, setPosicionesUsuarios] = useState(Array(numJugadores).fill(0));
  const [turnoActual, setTurnoActual] = useState(0);
  const [dado1, setDado1] = useState(1);
  const [dado2, setDado2] = useState(1);

  const propiedades = [
    { nombre: 'Salida', tipo: 'Especial', color: 'blanco' },
    { nombre: 'Recoleta', tipo: 'Propiedad', color: 'verde' },
    { nombre: 'Palermo', tipo: 'Propiedad', color: 'verde' },
    { nombre: 'Belgrano', tipo: 'Propiedad', color: 'amarillo' },
    { nombre: 'Carcel', tipo: 'Especial', color: 'gris' },
    { nombre: 'Caballito', tipo: 'Propiedad', color: 'amarillo' },
    { nombre: 'Once', tipo: 'Propiedad', color: 'naranja' },
    { nombre: 'Flores', tipo: 'Propiedad', color: 'naranja' },
    { nombre: 'Pase libre', tipo: 'Especial', color: 'blanco' },
    { nombre: 'Almagro', tipo: 'Propiedad', color: 'rojo' },
    { nombre: 'Boedo', tipo: 'Propiedad', color: 'rojo' },
    { nombre: 'Villa Crespo', tipo: 'Propiedad', color: 'morado' },
    { nombre: 'A la carcel', tipo: 'Especial', color: 'negro' },
    { nombre: 'Villa Urquiza', tipo: 'Propiedad', color: 'morado' },
    { nombre: 'San Telmo', tipo: 'Propiedad', color: 'gris' },
    { nombre: 'Nuñez', tipo: 'Propiedad', color: 'gris' },
    { nombre: 'Colegiales', tipo: 'Propiedad', color: 'celeste' },
    { nombre: 'La Boca', tipo: 'Propiedad', color: 'azul' },
    { nombre: 'Barracas', tipo: 'Propiedad', color: 'azul' },
    { nombre: 'Chacarita', tipo: 'Propiedad', color: 'celeste' },
  ];

  const tirarDados = () => {
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;
    setDado1(dado1);
    setDado2(dado2);
    const resultado = dado1 + dado2;
    setPosicionesUsuarios((prevPosiciones) => {
      const nuevasPosiciones = [...prevPosiciones];
      nuevasPosiciones[turnoActual] = (nuevasPosiciones[turnoActual] + resultado) % propiedades.length;
      return nuevasPosiciones;
    });
    setTurnoActual((prevTurno) => (prevTurno + 1) % numJugadores);
  };

  const renderPropiedades = (start, end) => (
    propiedades.slice(start, end).map((p, index) => (
      <div
        key={p.nombre}
        className={`${styles.casillaBarrio} ${styles[p.color]}`}
      >
        {p.nombre}
        {posicionesUsuarios.map((pos, i) =>
          pos === (start + index) ? <span key={i} className={styles[`jugador${i + 1}`]}>J{i + 1}</span> : null
        )}
      </div>
    ))
  );

  return (
    <>
      <div className={styles.container}>
        <div className={styles.filaUno}>
          {renderPropiedades(0, 4)}
        </div>
        <div className={styles.columnaUno}>
          {renderPropiedades(4, 8)}
        </div>
        <div className={styles.filaDos}>
          {renderPropiedades(8, 12)}
        </div>
        <div className={styles.columnaDos}>
          {renderPropiedades(12, 16)}
        </div>
      </div>
      <div className={styles.dados}>
        <p>Turno del jugador {turnoActual + 1}</p>
        <button onClick={tirarDados}>Tirar Dados</button>
        <Dados dado1={dado1} dado2={dado2} />
      </div>
    </>
  );
}

export default Tablero;
