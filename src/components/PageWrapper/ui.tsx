import React, { ReactNode } from 'react'
import './style.scss'

interface Props {
    children: React.ReactNode
}
  
export const PageWrapper = ({children}:  Props) => {
    
    return (
        <div className='pageWrapper'>
            {children}
        </div>
    )
}