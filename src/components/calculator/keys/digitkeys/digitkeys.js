import React from 'react'
import classes from './digitkeys.module.css'

const Digitkeys = (props) => {
    const key = <button className={classes.digitkeys}>{props.children}</button>
    return(
        <React.Fragment>
            {key}
        </React.Fragment>
    )
}
export default Digitkeys