import {useState} from "react";
import './calculator.styles.css'
import CalculatorForm from "../components/form/calculator-form.component";

const Calculator = () => {
  const [recommendedSize, setRecommendedSize] = useState(null)
  return (
    <div className="calculator-container">
      <section className="size-calculator">
        <CalculatorForm onSubmit={setRecommendedSize} />
      </section>
      <section className="size-results">
        {recommendedSize &&<span>{recommendedSize}</span> }
      </section>
    </div>
  )
}



export default Calculator;