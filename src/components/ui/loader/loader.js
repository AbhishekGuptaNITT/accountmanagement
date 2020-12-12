import React from 'react'
import classes from './loader.module.css'

const Loader = (props) => {
    const style = {
        padding:'20px',
        width:'100vh',
    }
    return(
        <div style={style}>
            <div class={classes.loader}>Loading...</div>
        </div>
    )
}
export default Loader