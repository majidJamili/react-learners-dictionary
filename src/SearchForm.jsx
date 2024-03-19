import * as React from 'react';
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import { useState } from "react";

function SearchForm({addWord}){
    const [word, setWord]=useState('');
    const handleChange = (evt)=>{
        console.log("Event Target:", evt.target); 
        console.log("add word", addWord)
        setWord(evt.target.value); 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addWord(word);
        setWord("");
      };


    return (        
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField
                id="outlined-basic"
                label="Search Words"
                variant="outlined"
                onChange={handleChange}
                value={word}
                InputProps={{
                    endAdornment: (
                    <InputAdornment position="end">
                        <IconButton aria-label="create todo" edge="end" type="submit">
                            <ManageSearchIcon />
                        </IconButton>
                    </InputAdornment>
                    ),
                }}
                />
            </form>
        </ListItem>

    ); 
}

export default SearchForm; 