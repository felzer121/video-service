import { Typography } from '@mui/material';
import React from 'react';
import './style.scss'

interface BlockTitleProps {
    icon: React.ReactNode
    title: string
}

export const FilledBlockTitle = ({icon, title}: BlockTitleProps) => {
    return (
        <div className='filledBlockTitle'>
            {icon}
            <Typography variant='h4' className='filledBlockTitle__title'>{title}</Typography>
        </div>
    );
};