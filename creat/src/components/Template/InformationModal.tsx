import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';
import { Fragment } from 'react';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#F5FCFF',
  border: '2px solid lightblue',
  boxShadow: 24,
  p: 4,
};

function InformationModal(info: any) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Fragment>
            <Grid container justifyContent={"right"}>
                <Button sx={{justifyContent: "right", fontSize: "1ex", border: "1px solid lightblue", bgcolor: "#F5FCFF", mt:1, mr: 2, pr: 1, borderRadius: 10 }} onClick={handleOpen}>information</Button>
            </Grid>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography textAlign={"center"} id="modal-modal-title" variant="h6" component="h2">
                        Information
                    </Typography>
                    <Typography textAlign={"center"} id="modal-modal-description" sx={{ mt: 2}}>
                        {JSON.stringify(info.msg)}
                    </Typography>
                </Box>
            </Modal>
        </Fragment>
    );
}

export default InformationModal;