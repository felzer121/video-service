import React from "react";
import { CardCourse } from "../CardCourse/ui";
import './style.scss'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Typography } from "@mui/material";

export const CourseContainer = () => {

    const courses = [
        {title: 'Special B-day podcast', subscribe: 204, tagName: 'javascript'},
        {title: 'Buttons with icons and label', subscribe: 124, tagName: 'NestJS'},
        {title: 'React.ReactElement aweqr', subscribe: 1033, tagName: 'javascript'},
        {title: 'Dependency Inversion Principle', subscribe: 666, tagName: 'javascript'},
        {title: 'Для устойчивой системы характерны', subscribe: 123, tagName: 'javascript'}
    ]

    return (
        <div className="courseContainer">
            <div className="courseContainer__controller">
                <Typography variant="h6">Самое интересное</Typography>
                <Typography variant="h2">Популярные курсы</Typography>
            </div>
            <div className="courseContainer__course">
                <Swiper
                    spaceBetween={35}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    {courses.map(course => <SwiperSlide><CardCourse title={course.title} subscribe={course.subscribe} tagName={course.tagName} /></SwiperSlide>)}
                  </Swiper>
            </div>
            
        </div>
    )
}