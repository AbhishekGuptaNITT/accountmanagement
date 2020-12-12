import React from 'react'
import classes from './header.module.css'
import Headercontrol from './headercontrol/headercontrol'
import Headercontrols from './headercontrol/headercontrols/headercontrols'
const Header = (props) => {
    const header = (
        <div className={classes.header}>
            <span className={classes.headerbrand}>
                Accounts Management
            </span>
            <Headercontrol balance={props.balance} transactions={props.transactions} />
        </div>
    )
    return(
        <div>
            {header}
        </div>
    )
}

export default Header