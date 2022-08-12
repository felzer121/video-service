import { Typography, Button } from '@mui/material';
import React from 'react';
import { BreadCrumbs } from '../../components/BreadCrumbs/ui';
import { Container } from '../../components/Container/ui';
import { MainButton } from '../../shared/component/MainButton';
import preview from '../../shared/assets/prev.jpg'
import LanguageIcon from '@mui/icons-material/Language';
import user from '../../shared/assets/user.jpg'
import './style.scss'

const Course = () => {

    const advantages = [
        {id: '1', title: '65', subTitle: 'часов'},
        {id: '2', title: '11K', subTitle: 'студентов'},
        {id: '3', title: <LanguageIcon />, subTitle: 'русский'},
        {id: '4', title: '4,7', subTitle: 'часов'},
        {id: '5', title: '14', subTitle: 'заданий'},
    ]

    return (
        <>
            <Container> 
                <div className='course'>
                    <div className='course__header'>
                        <div className='course__header-info'>
                            <BreadCrumbs />
                            <Typography variant='h2' className='course__header-title'>100 Days of Code: The Complete Python Pro Bootcamp for 2022</Typography>
                            <div className='course__header-advantage'>
                                {advantages.map(advantage => (
                                    <div key={advantage.id} className='course__header-advantageBlock'>
                                        <Typography variant='h4'>{advantage.title}</Typography>
                                        <Typography variant='h5'>{advantage.subTitle}</Typography>
                                    </div>
                                ))}
                            </div>
                            <div className='course__header-footer'>
                                <div className='course__header-footerAuthor'>
                                    <img src={user} alt="" />
                                    <div className='course__header-footerAuthorInfo'>
                                        <Typography variant='h4'>Ridhwan Nordin</Typography>
                                        <Typography variant='h5'>@ridzjcob</Typography>
                                    </div>
                                </div>
                                <div className='course__header-footerPayment'>
                                    <MainButton variant='contained'>
                                        Записаться на курс
                                    </MainButton>
                                </div>
                            </div>
                        </div>
                        <div className='course__header-preview'>
                            <img src={preview} alt="" />
                        </div>
                    </div>
                </div>
            </Container>  
        </>
    );
};

export default Course;