import React,{useRef,useState} from 'react'
import Input from '../UI/Input'
import classes from './MealItemForm.module.css'


const MealItemForm = (props) => {
    const[amountIsValid,setAmountIsValid]=useState(true)
    const amountInputRef=useRef()
    const submittHandler=(event)=>
    {
        event.preventDefault()
        const enteredAmount=amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

           console.log("1st",typeof(enteredAmount))
           console.log("Second",typeof(enteredAmountNumber))
        

        if(enteredAmount.trim().length===0 || enteredAmountNumber < 1 || enteredAmountNumber > 5 )
        {
            setAmountIsValid(false)
            return;
        }
         props.onAddToCart(enteredAmountNumber)
    }
  return (
    <form className={classes.form} onSubmit={submittHandler}>
     
      
        <Input  ref={amountInputRef} label="Amount" input={{
           
             id: 'amount' + props.id,
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
        }}/>
         <button>+Add</button>
         {!amountIsValid && <p> Please Enter Valid Amount(1-5)</p>}
    </form>
  )
}

export default MealItemForm