import React from 'react';
import { ButtonFill } from '../ButtonFill';
import useMeasure from 'react-use-measure'
import SearchIcon from '@mui/icons-material/Search';
import './style.scss'
import { animated, useSpring } from 'react-spring';

export const Search = () => {

    const [active, setActive] = React.useState(false)
    const [ref, { width }] = useMeasure()

    const searchForm = useSpring({     
        width: active ? width : 0
     })
    return (
        <div className='search' ref={ref}>
            <animated.div
                style={searchForm}
                className='searchForm'
            >
                <ButtonFill className='search__btn' onClick={() => setActive(!active)}>
                    <SearchIcon />
                </ButtonFill>
                <input type="text" className='search__input' />
            </animated.div>
        </div>
    );
};