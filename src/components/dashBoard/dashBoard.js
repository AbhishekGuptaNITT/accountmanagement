import React,{Component} from 'react'
import classes from './dashBoard.module.css'
import axios from '../axiosinstance/axiosinstance'
import Transaction from './transaction/transaction'
class Dashboard extends Component{
    state={
        transactions:null,
        summary:null,
        responseData:null,
    }
    render(){
        axios.get('transactions.json/').then(
            (res) => {
                if(this.state.responseData!=res.data){
                    this.setState({
                        responseData:res.data
                    })
                }
            }
        ).catch(error => console.log(error))
        let transactions = null
        if(this.state.responseData){
            const keys = Object.keys(this.state.responseData)
            const data = this.state.responseData
            transactions = keys.map(
                (key,ind) => {
                    return(
                        <Transaction
                         amount = {data[key].amount} 
                         type = {data[key].type}
                         comment = {data[key].comment}
                         />
                    )
                }
            )
        }
        return(
            <div>
                <table>
                    <thead>
                        <td><h3>AMOUNT</h3></td>
                        <td><h3>TYPE</h3></td>
                        <td><h3>COMMENT</h3></td>
                    </thead>
                    <tbody>
                        {transactions}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Dashboard