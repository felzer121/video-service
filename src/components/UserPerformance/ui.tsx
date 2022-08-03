import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import user from '../../shared/assets/user.jpg'
import { styled } from '@mui/material/styles';
import './style.scss'
import { useSpring, animated } from "react-spring";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';

const UserList = styled(List)<{ component?: React.ElementType }>({
    '&': {
        padding: '0px'
    },
    '& .MuiListItemButton-root': {
      paddingLeft: 15,
      paddingRight: 15,
    },
    '& .MuiListItemButton-root:hover': {
        background: 'rgba(255, 255, 255, .1)',
    },
    '& .MuiListItemIcon-root': {
      minWidth: 0,
      color: 'inherit',
      marginRight: 10,
    },
    '& .MuiListItemText-root': {
        color: '#fff'
    },
    '& .MuiSvgIcon-root': {
      fontSize: 20,
    },
});

const dataUser = [
    { icon: <PersonIcon />, label: 'Личный кабинет' },
    { icon: <FavoriteIcon />, label: 'Список желаний' },
  ];

export const UserPerformance = () => {
    const [active, setActive] = React.useState(false)
    let menuLeaveTimer: number;

    const props = useSpring({
        display: active ? 'block' : 'none',
        top: active ? '55px' : '40px'
    });

    const leaveMouse = () => {
        menuLeaveTimer = window.setTimeout(() => {
            setActive(false)
        }, 200);
    }

    const enterMouse = () => {
        clearTimeout(menuLeaveTimer);
        setActive(true)
    }

    return (    
        <div className='userPerformance' onMouseEnter={enterMouse} onMouseLeave={leaveMouse}>
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
                <UserList>
                    {dataUser.map((elem) => (
                        <ListItem disablePadding>
                             <ListItemButton component="button">
                                <ListItemIcon>{elem.icon}</ListItemIcon>
                                <ListItemText primary={elem.label} />
                             </ListItemButton>
                        </ListItem>
                    ))}
                </UserList>
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