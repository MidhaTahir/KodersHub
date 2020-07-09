import React from "react";
import "./dashboard-cards.styles.css";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: ({ inactive }) => ({
    display: "flex",
    flexWrap: "wrap",
    justifyContent : "space-evenly",
    textAlign: "center",
    borderRadius: theme.spacing(2),
    backgroundColor: "#F4F7FA",
    margin: theme.spacing(2),
    boxShadow: '0px 10px 40px rgba(34, 35, 58, 0.2)',
    transition: '0.3s',
    "& > *": {
      margin: theme.spacing(6),
      width: theme.spacing(20),
      height: theme.spacing(20),
      marginTop : theme.spacing(14),
      color: "#2FA08F",
    },
    '&:hover': {
      transform: 'translateY(2px)',
      boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
    },
  }),
}));

const DashboardCard = (props) => {
  const classes = useStyles();
  const linkStr = "/dashboard/" + props.lang;
  return (
    <Paper className={classes.root} elevation={3} square={false}>
      <Link to={linkStr} style={{ textDecoration: "none" }}>
        <div>
          <h1>{props.symbol}</h1>
          <h2>{props.lang.toUpperCase()}</h2>
        </div>
      </Link>
    </Paper>
  );
};

export default DashboardCard;
