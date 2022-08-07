import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserPerformance } from '../UserPerformance/ui'
import './style.scss'

export const Header = () => {
    return (
        <div className='header'>
            <div className='header__logo'>
                <NavLink to='/'>logo</NavLink>
            </div>
            <UserPerformance />
        </div>
    )
}