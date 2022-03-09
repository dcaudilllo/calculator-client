import React from "react";
import './calculator-button.styles.css'
const CalculatorButton = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button {...props} className={`calculator-btn ${props.disabled ? 'calculator-btn-disabled' : 'calculator-btn-enabled'}`}>{props.children}</button>
}

export default CalculatorButton;