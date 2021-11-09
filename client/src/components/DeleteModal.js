import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AuthContext from '../auth'; 
import { GlobalStoreContext } from '../store'; 
import { useContext } from 'react';
import Alert from '@mui/material/Alert'; 
import Modal from '@mui/material/Modal';

export default function DeleteModal(){
  const {store} = useContext(GlobalStoreContext); 
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  let list = store.listMarkedForDeletion;
  function handleDeleteList(event) {
    store.deleteMarkedList();
}
  function handleCancelDeleteList(event) {
    store.unmarkListForDeletion();
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: 'center'
  };
  if (list===null){
  return(
    <Modal
    open={store.listMarkedForDeletion}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
    <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Delete the list?
    </Typography>
        <Button 
        onClick={handleDeleteList}
        >Yes</Button>
        <Button
        onClick={handleCancelDeleteList}
        >No</Button>
    </Box>
</Modal>
  );
  }
  else{
    return(
      <Modal
      open={store.listMarkedForDeletion !== null}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
      <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Delete the { list.name } list?
      </Typography>
          <Button 
          onClick={handleDeleteList}
          >Yes</Button>
          <Button
          onClick={handleCancelDeleteList}
          >No</Button>
      </Box>
  </Modal>
    );
  }
}