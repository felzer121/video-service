import React from 'react';
import { Container } from '../../components/Container/ui';
import { UserTitle } from '../../components/UserTitle/ui';
import { FilledBlockTitle } from '../../shared/component/FilledBlockTitle/ui';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import user from '../../shared/assets/user.jpg'
import './style.scss'
import { IconButton, Typography } from '@mui/material';
import { MainButton } from '../../shared/component/MainButton';
import { NavLink } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';

export const User = () => {

    const noCourse = () => {
        return (
            <div className='user__containerCourse-container'>
                <div className='user__containerCourse-block'>
                    <Typography variant='h4' className='user__containerCourse-txt'>Этот пользователь еще не начал проходить ни один из курсов курсов</Typography>
                    <NavLink to='/'>
                        <MainButton>посмотреть курсы</MainButton>
                    </NavLink>
                </div>
            </div>
        )
    }

    return (
        <Container>
            <div className='user'>
                <div className='user__icon'>
                    <img src={user} alt="" />
                    <div className='user__iconEdit'>
                        <IconButton aria-label="delete" size="medium" sx={{width: '100%', height: '100%', color: '#141312'}}>
                            <EditIcon fontSize="inherit" />
                        </IconButton> 
                    </div>
                </div>
                <div className='user__container'>
                    <UserTitle title='Albert' subTitle='Управляйте вашим профилем здесь дополняйте и кастомизируйте' buttonTitle='Редактировать профиль' />
                    <div className='user__containerAbout'>
                        <FilledBlockTitle title='Обо мне' icon={<MessageOutlinedIcon />} />
                        <div className='user__containerAbout-textBlock'>
                            <Typography variant='h5'>Имею огромное желание расширения своего стека и изучения новых технологий, паттернов. В связи с чем стараюсь посещать митапы и различные IT конференции в своем городе.</Typography>    
                        </div>
                    </div>
                    <div className='user__containerCourse'>
                        <FilledBlockTitle title='Курсы на прохождении' icon={<SchoolRoundedIcon />} />
                        {noCourse()}
                    </div>
                </div>
            </div>
        </Container>
    );
};