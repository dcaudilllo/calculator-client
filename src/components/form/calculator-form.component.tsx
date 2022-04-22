import React, {ChangeEvent, FormEvent, useState} from "react";
import './calculator-form.styles.css'
import CalculatorInput from "../input/calculator-input.component";
import CalculatorButton from "../button/calculator-button.component";
import axios from "axios";
import CalculatorSelector from "../input/selector/calculator-selector.component";

interface ISize {
  waist: number | undefined;
  hips: number | undefined;
  style: number | undefined;
}

const CalculatorForm = (props: { onSubmit: any; }) => {
  const initialValue: ISize = {
    waist: undefined,
    hips: undefined,
    style: 0
  }

  const {onSubmit} = props;

  const [size, setSize] = useState(initialValue);

  const onInputChange = (evt:ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;
    setSize(prevState => ({...prevState, [name]: Number(value)}))
  }

  const onSelectChange = (evt:ChangeEvent<HTMLSelectElement>) => {
    const {name, value} = evt.target;
    setSize(prevState => ({...prevState, [name]: Number(value)}))
  }

  const onFormSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    try {

      const {data} = await axios.get('http://192.168.1.22:8008/v1/size/prediction', {
        params: size
      })
      onSubmit(data)
    } catch (e) {
      console.log(e)
    }

  }


  return (
    <form name="calculator-form" className="calculator-form" onSubmit={onFormSubmit}>
      <CalculatorInput required={true} onChange={onInputChange} value={size.waist || undefined}  type="number" placeholder="Waist size" name="waist" />
      <CalculatorInput required={true} onChange={onInputChange}  value={size.hips || undefined} type="number" placeholder="Hips size" name="hips" />
      <CalculatorSelector required={true} onChange={onSelectChange} name="style">
        <option key="sapphire" value={0}>Sapphire</option>
        <option key="bronzer" value={0}>Bronzer</option>
        <option key="pockets" value={1}>Pockets</option>
        <option key="breeze" value={1}>Breeze</option>
      </CalculatorSelector>
      <CalculatorButton type="submit">Submit</CalculatorButton>
    </form>
  )
}

export default CalculatorForm;