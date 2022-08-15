import { FormControl, IconButton, InputAdornment, InputLabel, Typography, Button } from '@mui/material';
import React from 'react';
import { Container } from '../../components/Container/ui';
import { DarkFilled } from '../../shared/darkFilled';
import userImg from '../../shared/assets/user.jpg'
import SearchIcon from '@mui/icons-material/Search';
import './style.scss'
import { SubButton } from '../../shared/component/subButton';

const chats = [
    {id: '1', name: 'Estel', img: userImg, lastMessage: 'React - The Complete Guide (incl Hooks, React Router, Redux)', lastTime: '16:20'},
    {id: '2', name: 'Estel', img: userImg, lastMessage: 'React - The Complete Guide (incl Hooks, React Router, Redux)', lastTime: '16:20'},
]

export const Message = () => {

    const [chatId, setChatId] = React.useState('1')

    const handleClick = (id: string) => {
        console.log(id)
    }

    return (
        <Container>
            <div className='message'>
                <div className='message__users'>
                    <FormControl
                        sx={{ width: '100%' }}
                        variant='filled'> 
                        <InputLabel
                            htmlFor='email'
                            color='primary'
                            sx={{ color: '#6D6D6D', fontFamily: 'Inter' }}>
                            Поиск
                        </InputLabel>
                        <DarkFilled 
                            endAdornment={
                                <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    edge="end"
                                >
                                    <SearchIcon sx={{color: '#C4C4C4'}} />
                                </IconButton>
                                </InputAdornment>
                            } 
                        />
                    </FormControl>
                    {chats.map(chat => (
                        <Button className={`message__usersChats`} style={chat.id === chatId ? {backgroundColor: 'rgba(0, 0, 0, 0.4)'} : {}} onClick={() => handleClick(chat.id)}>
                            <img src={chat.img} alt="" />
                            <div className='message__usersChats-info'>
                                <div className='message__usersChats-title'>
                                    <Typography variant='h4'>{chat.name}</Typography>
                                    <Typography variant='h6'>{chat.lastTime}</Typography>
                                </div>
                                <div className='message__usersChats-message'>
                                  <Typography variant='body2' className='message__usersChats-messageTxt'>{chat.lastMessage}</Typography>  
                                </div>
                            </div>
                        </Button>
                    ))}
                </div>
                <div className='message__chat'>
                        
                </div>
            </div>
        </Container>
    );
};