import * as React from 'react'
import styles from './styles.module.css'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

const buttonStyle = {
  padding: '10px 20px'
}

export const Button = (props: any) => {
  return (
    <button
      className='btn btn-default'
      style={buttonStyle}
      onClick={props.handleClick}
    >
      Long
      {props.children}
    </button>
  )
}

Button.defaultProps = {
  onClick: () => {},
  label: ''
}
