import React from 'react';
import { ButtonFill } from '../ButtonFill';
import useMeasure from 'react-use-measure'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import './style.scss'
import { animated, useSpring } from 'react-spring';

export const Search = () => {

    const [active, setActive] = React.useState(false)
    const [ref, { width }] = useMeasure()
    const inputSearch = React.useRef<HTMLInputElement>(null)

    const searchForm = useSpring({     
        width: active ? width : 0
    })

    const handleClick = () => {
        setActive(!active)
        active ? inputSearch.current?.blur() : inputSearch.current?.focus()
    }

    return (
        <div className='search' ref={ref}>
            <animated.div
                style={searchForm}
                className='searchForm'
            >
                <ButtonFill className='search__btn' disabled={active ? true : false} style={{color: active ? 'var(--dark-mode-subColor)': '#fff'}} onClick={handleClick}>
                    <SearchIcon />
                </ButtonFill>
                <input type="text" placeholder='Поиск' ref={inputSearch} className='search__input' />
                {active && <ButtonFill className='search__btn' style={{color: '#C4C4C4'}} onClick={handleClick}>
                    <CloseIcon />
                </ButtonFill>}
            </animated.div>
        </div>
    );
};