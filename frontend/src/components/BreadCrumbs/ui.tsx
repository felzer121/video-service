import React from 'react';
import { NavLink } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './style.scss'
export const BreadCrumbs = () => {
    const breadCrumbs = [
        {name: 'разработка', url: '/'},
        {name: 'языки программирования', url: '/'},
        {name: 'js', url: '/'},

    ]
    return (
        <div className='breadCrumbs'>
            {breadCrumbs.map((breadCrumb, index) => (
                <div key={index} className='breadCrumbs__block'>
                    <NavLink className='breadCrumbs__link' style={{ color: `${index === breadCrumbs.length - 1 ? 'var(--dark-mode-subColor)': 'inherit'} ` }} to={breadCrumb.url}>{breadCrumb.name}</NavLink>
                    {index !== breadCrumbs.length - 1 ? <ChevronRightIcon className='breadCrumbs__arrow' /> : '' }
                </div>
            ))}
        </div>
    );
};
