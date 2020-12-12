import React,{Component} from 'react'
import Headercontrol from '../headercontrol'
import classes from './headercontrols.module.css'

const Headercontrols = (props) => {
    return(
        <button className={classes.menu}>{props.children}</button>
    )
}
export default Headercontrols
