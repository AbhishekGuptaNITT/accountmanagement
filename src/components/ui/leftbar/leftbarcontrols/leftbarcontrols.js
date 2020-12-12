import React from 'react'
import classes from './leftbarcontrols.module.css'

const Leftbarcontrols = (props) => {
    const button = <button className={classes.menu}>{props.children}</button>
    return(
        <div>
            {button}
        </div>
    )
}
export default Leftbarcontrols