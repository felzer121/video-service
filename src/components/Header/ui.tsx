import React from 'react'
import { UserPerformance } from '../UserPerformance/ui'
import './style.scss'

export const Header = () => {
    return (
        <div className='header'>
            <div className='header__logo'>
                logo
            </div>
            <UserPerformance />
        </div>
    )
}