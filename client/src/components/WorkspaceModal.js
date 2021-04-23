import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Checkbox, Modal, Backdrop, Fade, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 30, 
    paddingRight: 30
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [checked, setChecked] = React.useState(false);

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
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open} >
          <div className={classes.paper}>
            <div>
              <h2 id="transition-modal-title">CONDITIONS OF USE</h2>
              <p id="transition-modal-description">
                The Tutuila Groundwater Recharge Tool was developed through
                collaboration the University of Hawai’i Water Resources research
                center, and the Ike Wai and Pacific RISA projects. It is
                provided as a Research tool and service to the public. Users are
                responsible for understanding the background and limitations of
                the Tool. Users are responsible for evaluating the
                appropriateness of the Tool for their objectives. Although the
                data displayed by the tool has been subjected to peer review, we
                reserve the right to update the web interface as needed pursuant
                to further analysis and review. No warranty, expressed or
                implied, is made by the University of Hawaii, the U.S.
                Government, or the State of Hawai’i as to the functionality of
                the web interface and related material, nor shall the fact of
                release constitute any such warranty. Furthermore, the Tutuila
                Groundwater Recharge Tool is released on condition that neither
                the University of Hawaii, the U.S. Government, nor the State of
                Hawai’i shall be held liable for any damages resulting from its
                authorized or unauthorized use. All content and results are in
                the public domain and may be used freely, with appropriate
                credit given to this website.
              </p>

              <p>
                Data citation: Shuler, C., Brewington, L., & El-Kadi, A. I.
                (2021). A participatory approach to assessing groundwater
                recharge under future climate and land-cover scenarios, Tutuila,
                American Samoa. Journal of Hydrology: Regional Studies, 34,
                100785.
              </p>
            </div>
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            I have read and understand the conditions of use
            <br></br>
            {checked ? (
              <Button variant="contained" color="primary" onClick={handleClose}>
                Continue
              </Button>
            ) : (
              <Button variant="contained" disabled>
                Continue
              </Button>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
