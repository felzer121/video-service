import React from "react";
import { CardCourse } from "../CardCourse/ui";
import './style.scss'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Typography } from "@mui/material";
import { BlockTitle } from "../BlockTitle/ui";
import { Container } from "../Container/ui";
import { CardTheme } from "../CardTheme/ui";

export const CourseContainer = () => {

    const courses = [
        {id: '1', title: 'Special B-day podcast', subscribe: 204, tagName: 'javascript'},
        {id: '2', title: 'Buttons with icons and label', subscribe: 124, tagName: 'NestJS'},
        {id: '3', title: 'React.ReactElement aweqr', subscribe: 1033, tagName: 'javascript'},
        {id: '4', title: 'Dependency Inversion Principle', subscribe: 666, tagName: 'javascript'},
        {id: '5', title: 'Для устойчивой системы характерны', subscribe: 123, tagName: 'javascript'}
    ]

    return (
        <div className="courseContainer">
            <Container>
                <BlockTitle title="Популярные курсы" subTitle="Самое интересное" marginTop="30px" />
            </Container>
            <div className="courseContainer__course">
                <Swiper
                    style={{padding: '0 130px'}}
                    spaceBetween={35}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    {courses.map(course => <SwiperSlide key={course.id}><CardCourse title={course.title} subscribe={course.subscribe} tagName={course.tagName} /></SwiperSlide>)}
                  </Swiper>
            </div>
        </div>
    )
}