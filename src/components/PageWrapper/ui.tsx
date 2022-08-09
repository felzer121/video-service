import React, { ReactNode } from 'react'
import { Header } from '../Header/ui'
import { SubMenu } from '../SubMenu/ui'
import './style.scss'

interface Props {
    children: React.ReactNode
}
  
export const PageWrapper = ({children}:  Props) => {
    
    return (
        <div className='pageWrapper'>
            <SubMenu />
            <div className='pageWrapper__content'>
                <Header />
                {children}
            </div>
        </div>
    )
}