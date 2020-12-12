import React,{useState} from 'react'
import classes from './calculator.module.css'
import Digitkeys from './keys/digitkeys/digitkeys'
const Calculator = (props) => {
    const [currentExpression,setCurrentExpression] = useState({
        expression:null,
        output:null,
    })
    const digitkeys = [1,2,3,4,5,6,7,8,9,0].map(
        (value,index) => <Digitkeys key={index}>{value}</Digitkeys>
    )
    return(
        <React.Fragment>    
            <div className={classes.calculator}>
                <div className={classes.output}></div>
                <div>
                    {digitkeys}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Calculator
