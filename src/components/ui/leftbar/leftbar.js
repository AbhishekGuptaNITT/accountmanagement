import React from 'react'
import classes from './leftbar.module.css'
import Leftbarcontrols from './leftbarcontrols/leftbarcontrols'
const Leftbar = (props) => {

    return(
        <div className={classes.leftbar}>
            <Leftbarcontrols>
                <i className="material-icons" style={{fontSize:'350%'}} onClick={(event) => props.clicked(event)}>home</i>
            </Leftbarcontrols>
            <Leftbarcontrols>
                <i className="material-icons" style={{fontSize:'350%'}} onClick={(event) => props.clicked(event)}>addchart</i>
            </Leftbarcontrols>
            <Leftbarcontrols>
                <i className="material-icons" style={{fontSize:'350%'}} onClick={(event) => props.clicked(event)}>calculate</i>
            </Leftbarcontrols>
        </div>
    )
}

export default Leftbar