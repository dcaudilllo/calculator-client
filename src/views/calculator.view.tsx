import {useState} from "react";
import './calculator.styles.css'
import CalculatorForm from "../components/form/calculator-form.component";
import CalculatorButton from "../components/button/calculator-button.component";
import axios from "axios";

const Calculator = () => {
  const [recommendedSize, setRecommendedSize] = useState(null)

  const handleTrainModel = async() => {
    try {
      const {data} = await axios.get('http://192.168.1.22:8008/v1/size/learn')
      console.log(data)
    } catch (e) {
      console.log(e)
    }

  }

  return (
    <div className="calculator-container">
      <section className="size-calculator">
        <CalculatorForm onSubmit={setRecommendedSize} />
        <CalculatorButton onClick={handleTrainModel}>Train Model</CalculatorButton>
      </section>
      <section className="size-results">
        {recommendedSize &&<span>{recommendedSize}</span> }
      </section>
    </div>
  )
}



export default Calculator;