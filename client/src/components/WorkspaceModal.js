import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox, Modal, Backdrop, Fade, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function TransitionsModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [checked, setChecked] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };


    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">CONDITIONS OF USE</h2>
                        <p id="transition-modal-description">All content and results are in the public domain and may be used freely, with appropriate credit given to this website.</p>
                        <Checkbox
                            checked={checked}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                        I have read and understand the conditions of use
                        <br></br>
                        {checked ? <Button variant="contained" color="primary" onClick={handleClose}>Continue</Button>: <Button variant="contained" disabled>Continue</Button>}
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
