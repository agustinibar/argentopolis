
import styles from '../Tablero/tablero.module.css';

const Tablero = () => {
  const propiedades = [
    { nombre: 'Recoleta', tipo: 'Propiedad', color: 'verde' },
    { nombre: 'Palermo', tipo: 'Propiedad', color: 'verde' },
    { nombre: 'Belgrano', tipo: 'Propiedad', color: 'amarillo' },
    { nombre: 'Caballito', tipo: 'Propiedad', color: 'amarillo' },
    { nombre: 'Once', tipo: 'Propiedad', color: 'naranja' },
    { nombre: 'Flores', tipo: 'Propiedad', color: 'naranja' },
    { nombre: 'Almagro', tipo: 'Propiedad', color: 'rojo' },
    { nombre: 'Boedo', tipo: 'Propiedad', color: 'rojo' },
    { nombre: 'Villa Crespo', tipo: 'Propiedad', color: 'morado' },
    { nombre: 'Villa Urquiza', tipo: 'Propiedad', color: 'morado' },
    { nombre: 'San Telmo', tipo: 'Propiedad', color: 'gris' }, // Nuevo barrio
    { nombre: 'Nuñez', tipo: 'Propiedad', color: 'gris' }, // Nuevo barrio
    { nombre: 'Colegiales', tipo: 'Propiedad', color: 'celeste' },
    { nombre: 'La Boca', tipo: 'Propiedad', color: 'azul' },
    { nombre: 'Barracas', tipo: 'Propiedad', color: 'azul' },
    { nombre: 'Chacarita', tipo: 'Propiedad', color: 'celeste' },
  ];


  return (
    <div className={styles.container}>
    {/* Fila Uno */}
    <div className={styles.filaUno}>
      <h1>Salida</h1>
      {propiedades.slice(0,4).map((p) => (
        <>
        <div key={p.nombre} className={`${styles.casillaBarrio} ${styles[p.color]}`}>{p.nombre}</div> 
        </>
      ))}
    </div>
    {/* Columna Uno */}
    <div className={styles.columnaUno}>
      <h1>Carcel</h1>
      {propiedades.slice(4, 8).map((p) => (
        <>
        <div key={p.nombre} className={`${styles.casillaBarrio} ${styles[p.color]}`}>{p.nombre}</div> 
        </>
      ))}
    </div>
    {/* Fila Dos */}
    <div className={styles.filaDos}>
      <h1>Pase libre</h1>
      {propiedades.slice(8, 12).map((p) => (
        <>
        <div key={p.nombre} className={`${styles.casillaBarrio} ${styles[p.color]}`}>{p.nombre}</div> 
        </>
      ))}
    </div>
    {/* Columna Dos */}
    <div className={styles.columnaDos}>
      <h1>A la carcel</h1>
      {propiedades.slice(12, 16).map((p) => (
        <>
        <div key={p.nombre} className={`${styles.casillaBarrio} ${styles[p.color]}`}>{p.nombre}</div> 
        </>
      ))}
    </div>
  </div>
  );
}

export default Tablero;
