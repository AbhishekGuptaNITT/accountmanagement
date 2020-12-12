import React from 'react'
import classes from './addTransaction.module.css'

const AddTransaction = (props) => {
    return(
        <div>
            <h1>ENTER TRANSACTION DETAILS</h1>
            <div className={classes.form}>
                <label>Amount</label>
                <input type='number' autoFocus id='amtpost'></input>
                <label>Type</label>
                <select name='type' id='typpost'>
                    <option value='debit'>Debit</option>
                    <option value='credit'>Credit</option>
                </select>
                <label>Comment</label>
                <input type='text' placeholder='comment' style={{margin:'10px 10px'}} id='compost'/>
                <br></br>
                <button onClick={props.postData}>STORE</button>
            </div>
        </div>
    )
}
export default AddTransaction