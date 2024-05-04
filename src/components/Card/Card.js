import styles from './Card.module.css';

const Card = (props) => {
  return(
      <div className={styles['container']}>
        <p>{props.children}</p>
      </div>
  )
}

export default Card;