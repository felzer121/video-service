import React from 'react';
import { ButtonFill } from '../ButtonFill';
import useMeasure from 'react-use-measure'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import './style.scss'
import { animated, useSpring } from 'react-spring';
import { IconButton } from '@mui/material';

export const Search = () => {

    const [active, setActive] = React.useState(false)
    const [mobileActive, setMobileActive] = React.useState(false)
    const [ref, { width }] = useMeasure()
    const inputSearch = React.useRef<HTMLInputElement>(null)

    const searchForm = useSpring({     
        width: active ? width : 0
    })

    const handleClick = () => {
        setActive(!active)
        active ? inputSearch.current?.blur() : inputSearch.current?.focus()
    }

    const handleOpenMobile = () => {
        setMobileActive(true)
        document.body.style.overflow = "hidden"
    }

    const handleCloseMobile = () => {
        setMobileActive(false)
        document.body.style.overflow = "auto"
    }

    return (
        <>
            <div className='searchDescktop' ref={ref}>
                <animated.div
                    style={searchForm}
                    className='searchDescktopForm'
                >
                    <ButtonFill className='searchDescktop__btn' disabled={active ? true : false} style={{color: active ? 'var(--dark-mode-subColor)': '#fff'}} onClick={handleClick}>
                        <SearchIcon />
                    </ButtonFill>
                    <input type="text" placeholder='Поиск' ref={inputSearch} className='searchDescktop__input' />
                    {active && <ButtonFill className='searchDescktop__btn' style={{color: '#C4C4C4'}} onClick={handleClick}>
                        <CloseIcon />
                    </ButtonFill>}
                </animated.div>
            </div>
            <div className='searchMobile'>
                <div className='searchMobileForm'>
                    <IconButton aria-label="delete" onClick={handleOpenMobile}>
                        <SearchIcon />
                    </IconButton>
                    {mobileActive && <div className='searchMobile__content'>
                        <div className='searchMobile__content-input'>
                            <SearchIcon className='searchMobile__searchIcon' />
                            <input type="text" placeholder='Поиск' className='searchMobile__input' />
                            <CloseIcon className='searchMobile__closeIcon' onClick={handleCloseMobile} />
                        </div>
                        
                    </div>}
                </div>
            </div>
        </>

    );
};