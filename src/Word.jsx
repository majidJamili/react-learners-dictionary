import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';

function Word({word, remove, toggle}){
    const labelId = `checkbox-list-label-${word.id}`;
    const removeTodo = () =>{
        remove(word.id)
    };
    return(
        <ListItem>
            <ListItemAvatar>
            <Avatar>
                <FormatColorTextIcon />
            </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
    )
}

export default Word; 
