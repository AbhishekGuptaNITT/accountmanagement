import React from 'react'
import classes from './transaction.module.css'

const Transaction = (props) => {
    const transaction = (
        <tr>
            <td>{props.amount}</td>
            <td>{props.type}</td>
            <td>{props.comment}</td>
        </tr>
    )
    return (
        <React.Fragment>
            {transaction}
        </React.Fragment>
    )
}

export default Transaction