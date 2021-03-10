import styles from './Input.module.css'

export default function Input(props) {
  return (
    <div className={styles.container}>
      <label htmlFor={props.id}>{props.placeholder}</label>
      <input id={props.id} type={props.type} placeholder={props.placeholder} onChange={props.onChange} />
    </div>
  )
}