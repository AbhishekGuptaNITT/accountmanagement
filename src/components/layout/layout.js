import React,{Component} from 'react'
import classes from './layout.module.css'
import Header from '../ui/header/header'
import Sidebar from '../ui/leftbar/leftbar'
import Leftbar from '../ui/leftbar/leftbar'
import AccountsManager from '../../containers/accountsmanager/accountsmanager'
import axios from '../../components/axiosinstance/axiosinstance'
import Loader from '../ui/loader/loader'
class Layout extends Component {
    state = {
        leftbaractive:'home',
        transactions:'---',
        balance:'---',
    }
    leftbarActiveChangeHandler = (event) => {
        this.setState({
            leftbaractive:'loader',
        })
        setTimeout(() => {  
        this.setState({
            leftbaractive:event.target.innerHTML
        })
        },3000)
    }
    constructor(){
        super()
        axios.get('summary.json/').then(
            (response) => {
                this.setState({
                    transactions:response.data.transactions,
                    balance:response.data.balance,
                })
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }
    render(){
        return(
            <React.Fragment>
                <Header 
                 balance = {this.state.balance}
                 transactions = {this.state.transactions}
                />
                <Leftbar clicked={this.leftbarActiveChangeHandler} />
                <AccountsManager active={this.state.leftbaractive}/>
            </React.Fragment>
        )
    }
}
export default Layout