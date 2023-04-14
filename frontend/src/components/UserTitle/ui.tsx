import { Button, Typography } from '@mui/material';
import React from 'react';
import { ButtonFill } from '../../shared/component/ButtonFill';
import './style.scss'
interface UserTitleProps {
    title: string
    subTitle: string
    buttonTitle: string
}

export const UserTitle = ({title, subTitle, buttonTitle}:UserTitleProps) => {
    const usersInfo = [
        {id: '1', subtitle: 'Дата регистрации:', title: '14.11.2012'},
        {id: '2', subtitle: 'Роль:', title: 'Пользователь'},
        {id: '3', subtitle: 'Подписки:', title: '0'},
        {id: '4', subtitle: 'Подписчики:', title: '0'}
    ]
    return (
        <div className='userTitle'>
            <div className='userTitleHeader'>
                <div className='userTitleHeader__title'>
                    <Typography variant='h2'>{title}</Typography>
                    <Typography variant='h5'>{subTitle}</Typography>
                </div>
                <ButtonFill variant='text'>
                    {buttonTitle}
                </ButtonFill>
            </div>
            <div className='userTitleFooter'>
                {usersInfo.map(item => (
                    <div className='userTitleFooter__item' key={item.id}>
                        <Typography variant='h5'>{item.subtitle}</Typography>
                        <Typography variant='h4'>{item.title}</Typography>
                    </div> 
                ))}
            </div>
        </div>
    );
};
