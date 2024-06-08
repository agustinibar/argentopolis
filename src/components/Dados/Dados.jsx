import styles from './dados.module.css';

const Dados = ({ dado1, dado2 }) => {
  return (
    <div className={styles.dadosContainer}>
      <div className={styles.dado}>{dado1}</div>
      <div className={styles.dado}>{dado2}</div>
      <div className={styles.resultado}>Total: {dado1 + dado2}</div>
    </div>
  )
}

export default Dados;