import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserPerformance } from '../UserPerformance/ui'
import './style.scss'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Button } from '@mui/material';

export const Header = () => {
    return (
        <div className='header'>
            <div className='header__sidenav'>
                <div className='header__burger'>
                    <Button variant="text"><MenuRoundedIcon /></Button>
                </div>
                <div className='header__logo'>
                    <NavLink to='/'>logo</NavLink>
                </div>
            </div>
            <UserPerformance />
        </div>
    )
}