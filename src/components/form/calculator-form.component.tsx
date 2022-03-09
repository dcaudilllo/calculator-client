import React, {ChangeEvent, FormEvent, useState} from "react";
import './calculator-form.styles.css'
import CalculatorInput from "../input/calculator-input.component";
import CalculatorButton from "../button/calculator-button.component";
import axios from "axios";

interface ISize {
  waist: number | undefined;
  hips: number | undefined;
}

const CalculatorForm = (props: { onSubmit: any; }) => {
  const initialValue: ISize = {
    waist: undefined,
    hips: undefined,
  }

  const {onSubmit} = props;

  const [size, setSize] = useState(initialValue);

  const onInputChange = (evt:ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;
    setSize(prevState => ({...prevState, [name]: Number(value)}))
  }

  const resetForm = () => {
    setSize({waist: undefined, hips: undefined})
  }

  const onFormSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    try {
      const {data} = await axios.get('http://localhost:8008/v1/size/prediction', {
        params: size
      })
      resetForm();
      onSubmit(data)
    } catch (e) {
      console.log(e)
    }

  }


  return (
    <form name="calculator-form" className="calculator-form" onSubmit={onFormSubmit}>
      <CalculatorInput required={true} onChange={onInputChange}  type="number" placeholder="Waist size" name="waist" />
      <CalculatorInput required={true} onChange={onInputChange}  type="number" placeholder="Hips size" name="hips" />
      <CalculatorButton type="submit">Submit</CalculatorButton>
    </form>
  )
}

export default CalculatorForm;