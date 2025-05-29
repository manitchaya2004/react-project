import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";
import { useState } from "react";


function TodoAdd({addtodo}) {
    const [text,setText] = useState("");
    const [open,setOpen] = useState(false);


    const handleOpen = ()=> setOpen(true);

    const handleClose = ()=>{
        setOpen(false);
        setText('');
    }
    const handelSubmit = ()=>{
        if (text.trim()){
            addtodo(text);
            handleClose();
        }
        handleClose(); // ปิด popup หลังจากเพิ่มงาน
    
    }
    
  return (
    <>
      <Button onClick={handleOpen} 
        sx={{
            backgroundColor : '#FFEDFA',
            color : '#BE5985',
            '&:hover' : {
              backgroundColor : '#BE5985',
              color : 'white'
            },
            borderRadius : '20px',
            width : '100px'
      }}>
        Add Task
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>ADD TODO LIST</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="task"
            type="text"
            fullWidth
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handelSubmit}>ADD</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
export default TodoAdd;
