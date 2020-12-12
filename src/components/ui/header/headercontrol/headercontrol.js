import React,{Component} from 'react'
import classes from './headercontrol.module.css'
import Headercontrols from './headercontrols/headercontrols'

const Headercontrol = (props) => {
    let balance = props.balance
    if(props.balance)
        balance = props.balance
    let transactions = props.transactions
    if(props.transaction)
        transactions = props.transactions
    return(
        <div className={classes.headercontrol}>
            <Headercontrols><b style={{color:'skyblue',fontSize:'120%'}}>{balance}</b> Rs left</Headercontrols>
    <Headercontrols><b style={{color:'skyblue',fontSize:'120%'}}>{transactions}</b> Total transactions</Headercontrols>
        </div>
    )
}

export default Headercontrol