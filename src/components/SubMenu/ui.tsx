import React from 'react';
import './style.scss'
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import TaskRoundedIcon from '@mui/icons-material/TaskRounded';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

const menu = [
    { id: 1, to: "/", icon: <GridViewRoundedIcon sx={{ fontSize: 28 }} /> },
    { id: 2, to: "/", icon: <SchoolRoundedIcon sx={{ fontSize: 28 }} /> },
    { id: 3, to: "/", icon: <MessageRoundedIcon sx={{ fontSize: 28 }} /> },
    { id: 4, to: "/", icon: <TaskRoundedIcon sx={{ fontSize: 28 }} /> }
]

export const SubMenu = () => {
    return (
        <div className='subMenu'>
           <div className='subMenu__content'>
                {menu.map(item => (
                    <NavLink to={item.to} className="subMenu__item">
                        <Button variant="text" color="secondary" sx={{width: '100%', height: '60px'}}>
                            {item.icon}
                        </Button>
                    </NavLink>
                ))}
           </div>
        </div>
    );
};