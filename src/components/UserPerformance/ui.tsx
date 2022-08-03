import { Typography } from '@mui/material'
import React from 'react'
import user from '../../shared/assets/user.jpg'
import './style.scss'
import { useSpring, animated } from "react-spring";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const UserPerformance = () => {
    const [active, setActive] = React.useState(false)
    let menuEnterTimer, menuLeaveTimer;
    const props = useSpring({
        display: active ? 'block' : 'none',
        top: active ? '55px' : '-10px',
        color: active ? '#F1C40F' : 'inherit'
    });

    const leaveMouse = () => {
        clearTimeout(menuEnterTimer);
        menuLeaveTimer = window.setTimeout(() => {
            setActive(false)
        }, 400);
    }

    const enterMouse = () => {
        clearTimeout(menuLeaveTimer);
        menuEnterTimer = window.setTimeout(() => {
            setActive(true)
        }, 0);
    }

    React.useEffect(()=>{

    }, [active])

    return (    
        <div className='userPerformance' onMouseEnter={enterMouse}
             onMouseLeave={leaveMouse}>
            <div className='userPerformance__icon'>
                <img className='userPerformance__icon-picture' src={user} alt="" />
                <div className='userPerformance__icon-notification'>1</div>
            </div>
            <animated.div
                style={{
                    display: props.display,
                    top: props.top
                }}
                className="userPerformance__menu"
            >
                <p>LOL</p>
                <p>LOL</p>
            </animated.div>
            <div className='userPerformance__info'>
                <div className='userPerformance__info-name'>
                    <Typography variant='h4' style={{color: active ? '#F1C40F' : 'inherit'}}>Albert</Typography>
                    <ArrowDropDownIcon />
                </div>
                <Typography variant='h5'>warhammer431@mail.ru</Typography>
            </div>
        </div>
    )
}