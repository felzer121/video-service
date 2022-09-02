
import React from 'react';
import { getSorting } from './getSorting';
import './style.scss'
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import SortRoundedIcon from '@mui/icons-material/SortRounded';
import AbcOutlinedIcon from '@mui/icons-material/AbcOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import AlignHorizontalRightOutlinedIcon from '@mui/icons-material/AlignHorizontalRightOutlined';
import AlignHorizontalLeftOutlinedIcon from '@mui/icons-material/AlignHorizontalLeftOutlined';

const Filters = () => {

    const sorting = [
        {id: 1, title: 'сортировка', type: 'select', label: 'Сортировать по', value: [{name: 'новейшие', icon: <AbcOutlinedIcon />}, {name: 'популярное', icon: <SignalCellularAltOutlinedIcon />},  {name: 'по возрастанию', icon: <AlignHorizontalRightOutlinedIcon />}, {name: 'по убыванию', icon: <AlignHorizontalLeftOutlinedIcon />}]},
        {id: 2, title: 'авторы', type: 'multiselect', label: 'Преподаватель курса', value: [{name: 'Автор1'}, {name: 'Автор2'}]},
        {id: 3, title: 'уровень', icon: <FileUploadRoundedIcon />, type: 'dropbox', value: [{name: 'Начинающий', count: 123}, {name: 'Продвинутый', count: 12}, {name: 'Эксперт', count: 12}]}
    ]

    return (
        <div className='filters'>
            {sorting.map(sort => <div key={sort.id}>{getSorting(sort)}</div>)}
        </div>
    );
};

export default Filters;