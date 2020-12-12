import React,{Component} from 'react'
import classes from './accountsmanager.module.css'
import Calculator from '../../components/calculator/calculator'
import Loader from '../../components/ui/loader/loader'
import AddTransaction from '../../components/addTransaction/addTransaction'
import axios from '../../components/axiosinstance/axiosinstance'
import DashBoard from '../../components/dashBoard/dashBoard'
class AccountsManager extends Component{
    state = {
        transactions:-1,
        balance:-1,
        statement:[],
        active:null,
    }
    postData = (event) => {
        const amount = document.getElementById('amtpost').value;
        const type = document.getElementById('typpost').value;
        const comment = document.getElementById('compost').value;
        const transaction = {
            amount : amount,
            type : type,
            comment : comment,
        }
        axios.post(
            'transactions.json/',transaction
        ).then(
            (response) => {
                console.log(response)
                window.location.reload()
            }
        ).catch(
            (error) => console.log(error)
        )
    }
    render(){  
    if(this.props.active!=this.state.active){
        this.setState({active:this.props.active})
    }
    const home = (
        <div>
            <h1>
                <i className='material-icons'>contact_mail</i>
                Welcome, thanks for using us
            </h1><hr></hr>
            <h3>
            <p>
                Accounts management team takes great plasure and pride in
                the satisfaction of its customers, and dedicated to it completely.
            </p>
            <p>
                If you have any suggestion for us then please mail us on:-<br></br>
                <u><b style={{color:'red'}}>accountsmanager@gmail.com</b></u>
            </p>
            </h3>
        </div>
    )
    const calculator = <Calculator />
    const loader = <Loader />
    const addTransaction = <AddTransaction postData = {this.postData} />
    const dashboard = <DashBoard />
    let content = null
    switch(this.state.active){
        case 'list':
            content = dashboard
            break
        case 'home':
            content = home
            break
        case 'calculate':
            content = calculator
            break;
        case 'loader':
            content = loader
            break;
        case 'addchart':
            content = addTransaction
            break
    }
        return(
            <div className={classes.main}>
                {content}
            </div>
        )
    }
}

export default AccountsManager