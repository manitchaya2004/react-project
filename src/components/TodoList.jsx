import {
  Checkbox,
  List,
  ListItem,
  ListItemText,
  Box,
  IconButton
} from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';


function TodoList({ todos,deleteTODO }) {
  return (
    <List sx={{ width: "100%" }}>
      {todos.map((todo) => (
        <ListItem sx={{ justifyContent: "center" }} key={todo.id} disablePadding>
          <Box
            sx={{
              display: "flex", // ทำให้เป็นแนวเดียวกันน้าา
              alignItems: "center",
              gap: 1,
              border: "1px solid #ccc",
              borderRadius: 2,
              padding: 1.5,
              width: "80%",
              bgcolor: "background.paper",
              boxShadow: 1,
            }}
          >
            <Checkbox />
            <ListItemText primary={todo.text} />
            <IconButton aria-label="delete" sx={{ color: '#BE5985' }} onClick={()=>{deleteTODO(todo.id)}}>
                 <DeleteIcon/>
            </IconButton>
          </Box>
        </ListItem>
      ))}
    </List>
  );
}
export default TodoList;
