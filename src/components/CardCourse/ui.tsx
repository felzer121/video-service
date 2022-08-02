import React from 'react'
import preview from '../../shared/assets/prev.jpg'
import GroupIcon from '@mui/icons-material/Group'
import './style.scss'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import { Button } from '@mui/material'
import { tags } from '../../shared/tags/index'

interface CardCourseProps {
    title: string
    subscribe: number
    tagName: string
}

export const CardCourse = ({title, subscribe, tagName}: CardCourseProps) => {
    const tag = tags.get(tagName)
    return (
        <div className='cardCourse'>
            <img src={ preview } className='cardCourse__preview' alt="" />
            <div className='cardCourse__about'>
                <div className='cardCourse__about-info'>
                    <div className='cardCourse__about-content'>
                       <h3 className='cardCourse__about-title'>{title}</h3>
                        <p className='cardCourse__about-userSubscribe'>
                            <GroupIcon />
                            <span className='cardCourse__about-userSubscribe-count'>{subscribe}</span>
                        </p> 
                    </div>
                    <div className='cardCourse__about-subscribe'>
                        <Button variant="text" startIcon={<GroupAddIcon />}>Подписаться</Button>
                    </div>
                </div>
                <div className='cardCourse__about-tag'>
                    <span className='cardCourse__about-tag-elem' data-tag={tag?.content}>{tag?.content}</span>
                </div>
            </div>
        </div>
    )
}