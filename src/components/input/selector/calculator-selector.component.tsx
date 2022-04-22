import React from "react";
import './calculator-selector.styles.css'

const CalculatorSelector = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLSelectElement> & React.InputHTMLAttributes<HTMLSelectElement>) => {
  return (
    <select {...props} className="calculator-selector">
      {props.children}
    </select>
  )

}

export default CalculatorSelector;