import React from 'react';
import { Container } from '../../components/Container/ui';
import { UserTitle } from '../../components/UserTitle/ui';
import user from '../../shared/assets/user.jpg'
import './style.scss'

export const User = () => {
    return (
        <Container>
            <div className='user'>
                <div className='user__icon'>
                    <img src={user} alt="" />
                </div>
                <div className='user__container'>
                    <UserTitle title='Настройки профиля' subTitle='Управляйте вашим профилем здесь дополняйте и кастомизируйте' buttonTitle='Перейти к вашему профилю' />
                </div>
            </div>
        </Container>
    );
};