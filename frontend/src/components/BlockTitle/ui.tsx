import { Typography } from '@mui/material'
import React from 'react'
import './style.scss'

interface BlockTitleProps {
    title: string
    subTitle: string
    titleSize?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    subTitleSize?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    marginTop: string
}

export const BlockTitle = ({title, subTitle, titleSize, subTitleSize, marginTop}: BlockTitleProps) => {
    return (
        <div className="blockTitle" style={{marginTop: marginTop}}>
            <Typography variant={subTitleSize ? subTitleSize : 'h6'}>{subTitle}</Typography>
            <Typography variant={titleSize ? titleSize : 'h2'}>{title}</Typography>
        </div>
    )
}