import React from "react";
import { CardCourse } from "../CardCourse/ui";
import './style.scss'

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
                <h2>Популярное</h2>
            </div>
            <div className="courseContainer__course">
                {courses.map(course => <CardCourse title={course.title} subscribe={course.subscribe} tagName={course.tagName} />)}
            </div>
            
        </div>
    )
}