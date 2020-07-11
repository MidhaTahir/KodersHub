import React from 'react'
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import useStyles from "./useStyles";

const OuterBody =(props) =>{

const classes = useStyles()
  return(   
          
    <div className={classes.paper}>
        <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
                <Typography component='h1' variant='h5'>
                  {props.name}
                </Typography>
    </div>
  )

}

export default OuterBody