import { Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import preview from '../../shared/assets/prev.jpg'
import './style.scss'

interface SmallCardCourseProps {
    id: string
    title: string
    price: number
    author: string
}

const SmallCardCourse = ({id, title, price, author}: SmallCardCourseProps) => {
    return (
        <div className='smallCardCourse'>
            <NavLink to={`course/${id}`}>
                <img src={ preview } className='smallCardCourse__preview' alt="" />
            </NavLink>
            <div className='smallCardCourse__about'>
                <div className='smallCardCourse__about-info'>
                    <div className='smallCardCourse__about-content'>
                       <h3 className='smallCardCourse__about-title'>{title}</h3>
                    </div>
                </div>
                <div className='smallCardCourse__aboutBottom'>
                    <span className='smallCardCourse__aboutBottom-author'>{author}</span>
                    <Typography variant='h4'>{price}</Typography>
                </div>
            </div>
        </div>
    );
};

export default SmallCardCourse;