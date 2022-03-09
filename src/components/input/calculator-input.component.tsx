import './calculator-input.styles.css'
const CalculatorInput = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement>) => {
  return <input {...props} className="calculator-input"/>

}

export default CalculatorInput;