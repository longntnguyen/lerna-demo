import * as React from 'react'

const buttonStyle = {
  padding: '10px 50px'
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
