import { Typography } from '@mui/material'
import React from 'react'
import user from '../../shared/assets/user.jpg'
import './style.scss'
import { useSpring, animated } from "react-spring";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const UserPerformance = () => {
    const [active, setActive] = React.useState(false)

    const props = useSpring({
        display: active ? 'block' : 'none'
      });


    return (    
        <div className='userPerformance' onMouseEnter={() => setActive(true)}
             onMouseLeave={() => setActive(false)}>
            <div className='userPerformance__icon'>
                <img className='userPerformance__icon-picture' src={user} alt="" />
                <div className='userPerformance__icon-notification'>1</div>
            </div>
            <animated.div
                style={{
                    display: props.display,
                    transition: '1s'
                }}
                className="userPerformance__menu"
            >
                <p>LOL</p>
                <p>LOL</p>
            </animated.div>
            <div className='userPerformance__info'>
                <div className='userPerformance__info-name'>
                    <Typography variant='h4'>Albert</Typography>
                    <ArrowDropDownIcon />
                </div>
                <Typography variant='h5'>warhammer431@mail.ru</Typography>
            </div>
        </div>
    )
}