import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import user from '../../shared/assets/user.jpg'
import { styled } from '@mui/material/styles';
import './style.scss'
import { useSpring, animated } from "react-spring";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import { NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';
import { RootState } from '../../shared/store';

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
        color: 'inherit',
    },
    '& .MuiSvgIcon-root': {
      fontSize: 20,
    },
});

const dataUser = [
    { id: 1, icon: <PersonIcon />, label: 'Личный кабинет', route: '/user' },
    { id: 2, icon: <FavoriteIcon />, label: 'Список желаний', route: '/wishlist' },
];

export const UserPerformance = () => {
    const [active, setActive] = React.useState(false)
    const isAuth = useSelector((state: RootState) => state.user.isAuth)

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

    const User = () => {
        if(isAuth)
            return (
            <div className='userPerformance__block' onMouseEnter={enterMouse} onMouseLeave={leaveMouse}>
                 <div className='userPerformance__icon'>
                        <img className='userPerformance__icon-picture' src={user} alt="" />
                        <div className='userPerformance__icon-notification'>1</div>
                    </div>
                <div className='userPerformance__info'>
                    <div className='userPerformance__info-name'>
                        <Typography variant='h4' style={{color: active ? '#F1C40F' : 'inherit'}}>Albert</Typography>
                        <ArrowDropDownIcon />
                    </div>
                    <Typography variant='h5'>warhammer431@mail.ru</Typography>
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
                            <ListItem disablePadding key={elem.id}>
                                <NavLink to={elem.route} style={{width: '100%'}}>
                                    <ListItemButton component="button" style={{width: '100%'}}>
                                        <ListItemIcon>{elem.icon}</ListItemIcon>
                                        <ListItemText primary={elem.label} />
                                    </ListItemButton>  
                                </NavLink>
                            </ListItem>
                        ))}
                    </UserList>
                </animated.div>
            </div>)
        else
            return(
                <div>Авторизация</div>
            )
    }

    return (    
        <div className='userPerformance'>
            <User />
        </div>
    )
}