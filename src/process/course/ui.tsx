import { Typography, AccordionDetails } from '@mui/material';
import React from 'react';
import { BreadCrumbs } from '../../components/BreadCrumbs/ui';
import { Container } from '../../components/Container/ui';
import { MainButton } from '../../shared/component/MainButton';
import preview from '../../shared/assets/prev.jpg'
import LanguageIcon from '@mui/icons-material/Language';
import user from '../../shared/assets/user.jpg'
import TaskIcon from '@mui/icons-material/Task';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import AllInclusiveOutlinedIcon from '@mui/icons-material/AllInclusiveOutlined';
import './style.scss'
import { BlockTitle } from '../../components/BlockTitle/ui';
import { AccordionSummary, Accordion } from '../../shared/component/AccordionSummaryDark/ui';

const advantages = [
    {id: '1', title: '65', subTitle: 'часов'},
    {id: '2', title: '11K', subTitle: 'студентов'},
    {id: '3', title: <LanguageIcon />, subTitle: 'русский'},
    {id: '4', title: '4,7', subTitle: 'часов'},
    {id: '5', title: '14', subTitle: 'заданий'},
]

const knowledges = [
    {id: '1', title: 'начальный JS'},
    {id: '2', title: 'Базовое знание БД '},
]

const courseСontentsStack = [
    {id: '1', title: 'День 1 — Новичок — Работа с переменными в Python для управления данными', subTitle: '1 час 30 минут'},
    {id: '2', title: 'День 1 — Новичок — Работа с переменными в Python для управления данными', subTitle: '1 час 30 минут'},
    {id: '3', title: 'День 1 — Новичок — Работа с переменными в Python для управления данными', subTitle: '1 час 30 минут'},
    {id: '4', title: 'День 1 — Новичок — Работа с переменными в Python для управления данными', subTitle: '1 час 30 минут'},
]

const courseСontents = [
    {id: '1', title: '14 практических заданий', icon: <TaskIcon />},
    {id: '2', title: '7-10 часов в неделю', icon: <AccessTimeIcon />},
    {id: '3', title: 'Сертификат при прохождении', icon: <EmojiEventsOutlinedIcon />},
    {id: '4', title: 'Полный пожизненный доступ', icon: <AllInclusiveOutlinedIcon />},
]

const courseOverviews = [
    {id: '1', title: 'Вы освоите язык программирования Python, создав 100 уникальных проектов за 100 дней.'},
    {id: '2', title: 'Вы освоите язык программирования Python, создав 100 уникальных проектов за 100 дней.'},
    {id: '3', title: 'Вы освоите язык программирования Python, создав 100 уникальных проектов за 100 дней.'},
    {id: '4', title: 'Вы освоите язык программирования Python, создав 100 уникальных проектов за 100 дней.'},
    {id: '5', title: 'Вы освоите язык программирования Python, создав 100 уникальных проектов за 100 дней.'},
    {id: '6', title: 'Вы освоите язык программирования Python, создав 100 уникальных проектов за 100 дней.'}
]

const Course = () => {

    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
      };

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
                    <div className='course__body'>
                        <div className='course__bodyContent'>
                            <div className='course__bodyAbout course__body-elem'>
                                <Typography variant='h2'>Что вы узнаете</Typography>
                                <div className='course__bodyAboutContent'>
                                    {courseOverviews.map((courseOverview, index) => (
                                        <div key={courseOverview.id} className='course__bodyAbout-item'>
                                            <div className='course__bodyAbout-icon'>{index + 1}</div>
                                            <Typography variant='body1'>{courseOverview.title}</Typography>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='course__bodyCourseContent'>
                               <BlockTitle title='Содержание курса' subTitle='4 раздела' marginTop='' /> 
                               <div className='course__bodyCourseContent-panel'>
                                    {
                                        courseСontentsStack.map(courseСontent => (
                                            <Accordion expanded={expanded === courseСontent.id} onChange={handleChange(courseСontent.id)}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1bh-content"
                                                    id="panel1bh-header"
                                                >
                                                    <Typography sx={{ width: '80%', flexShrink: 0 }}>
                                                        {courseСontent.title}
                                                    </Typography>
                                                    <Typography variant="h5">{courseСontent.subTitle}</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                                        Aliquam eget maximus est, id dignissim quam.
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        ))
                                    }
                               </div>  
                            </div>
                        </div>
                        <div className='course__bodyBuy'>
                            <div className='course__bodyBuy-container'>
                                <Typography variant='h2'>Купив курс вы получите: </Typography>
                                <div className='course__bodyBuyCourseСontents'>
                                    {courseСontents.map(courseСontent => (
                                        <div className='course__bodyBuy-elem' key={courseСontent.id}>
                                            <div className='course__bodyBuy-icon'>{courseСontent.icon}</div>
                                            <Typography variant='body2'>{courseСontent.title}</Typography>
                                        </div>
                                    ))}
                                    <div className='course__bodyBuy-line'></div>
                                </div>
                                <div className='course__bodyBuy-knowledges'>
                                    <Typography variant='body2'>Для прохождения нужны знания:</Typography>
                                    <div className='course__bodyBuyKnowledgeСontents'>
                                        {knowledges.map(knowledge => (
                                            <div className='course__bodyBuy-knowledge' key={knowledge.id}>
                                                {knowledge.title}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='course__bodyBuy-footer'>
                                    <div className='course__bodyBuy-price'>
                                        <Typography variant='h5'>Цена:</Typography>
                                        <Typography variant='h4'>8.000 рублей</Typography>
                                    </div>
                                    <MainButton>Записаться на курс</MainButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>  
        </>
    );
};

export default Course;