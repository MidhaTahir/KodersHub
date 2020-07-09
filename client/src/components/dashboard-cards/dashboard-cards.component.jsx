import React from "react";
import "./dashboard-cards.styles.css";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "columnReverse",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
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
