import React from 'react'
import preview from '../../shared/assets/prev.jpg'
import GroupIcon from '@mui/icons-material/Group'
import './style.scss'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import { Button } from '@mui/material'
import { tags } from '../../shared/tags/index'
import { useSpring, animated } from 'react-spring'

interface CardCourseProps {
    title: string
    subscribe: number
    tagName: string
}

const calc = (x:number, y:number) => [-(y - window.innerHeight / 2) / 100, (x - window.innerWidth / 2) / 100, 1.05]
const trans = (x:number, y:number, s:number) => `perspective(${window.innerWidth}px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


export const CardCourse = ({title, subscribe, tagName}: CardCourseProps) => {
    const tag = tags.get(tagName)

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
 
    return (
        <animated.div onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1]})} style={{ transform: props.xys.interpolate(trans) }} className='cardCourse'> 
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
                        <Button variant="text" startIcon={<GroupAddIcon />}>Перейти</Button>
                    </div>
                </div>
                <div className='cardCourse__about-tag'>
                    <span className='cardCourse__about-tag-elem' data-tag={tag?.content}>{tag?.content}</span>
                </div>
            </div>
        </animated.div>
    )
}