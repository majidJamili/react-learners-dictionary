
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useEffect } from 'react';
import SearchForm from './SearchForm';
import Word from './Word';

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("words"));
    if (!data) return [];
    return data;
  };
  

function WordList(){
    const [words, setWord] = useState(getInitialData);
    useEffect(()=>{
        localStorage.setItem("words", JSON.stringify(words))
    },[words])
    const removeWord = (id) => {
        setWord((prevWords)=>{
            return prevWords.filter((t) => t.id !== id )
        })
    }

    const toggleWord = (id)=>{
        setWord((prevWords)=>{
            return prevWords.map((word)=>{
                if (word.id === id) {
                    return {...word, completed:!word.completed};                  
                }else{
                    return word; 
                }
            })
        })
    }; 
    const addWord = (word)=>{
        setWord((prevWords)=>{
            return [
                ...prevWords, 
                {word: word, id: crypto.randomUUID(), completed: false},
            ];
        });
    };

    return (  
        <>
                {words.map((item)=>(
                            <p>{item.id}</p>

        ))}

        <SearchForm addWord={addWord} />
        </>          


      );
}
export default WordList; 



