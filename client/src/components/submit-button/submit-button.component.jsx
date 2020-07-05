import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import cookie from '../../images/cookie.png';
import './submit-button.styles.css';

const getModalStyle = () => {
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`
	};
};

const useStyles = makeStyles((theme) => ({
	paper: {
		position: 'absolute',
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		textAlign: 'center',
		padding: theme.spacing(2, 4, 3)
	}
}));

const SubmitButton = () => {
	const classes = useStyles();
	const [ modalStyle ] = React.useState(getModalStyle);
	const [ open, setOpen ] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	// const handleClose = () => {
	// 	setOpen(false);
	// };

	const body = (
		<div style={modalStyle} className={classes.paper}>
			<h2 id="simple-modal-title">YOU GOT A COOKIE!</h2>
			<p id="simple-modal-description">You got the solution right! New Challenges are waiting for you!</p>
			<img src={cookie} alt="cookie" />
			<br />
			<Button variant="contained" color="secondary">
				Next Challenge
			</Button>
		</div>
	);

	return (
		<div>
			<Button onClick={handleOpen} variant="contained" color="secondary">
				Submit Code
			</Button>
			<Modal
				open={open}
				// onClose={handleClose}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
			>
				{body}
			</Modal>
		</div>
	);
};

export default SubmitButton;
