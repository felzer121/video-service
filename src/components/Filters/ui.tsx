import { Typography, Autocomplete, TextField } from '@mui/material';
import React from 'react';
import './style.scss'

interface sortingType {
    title: string
    type: string
    value: Array<{
        name: string
        count?: number
    }>
}


const Filters = () => {
    
    const getSorting = (sort: sortingType) => {
        switch(sort.type) {
            case 'select' :
                return <div className='filters__select'>
                    <Typography variant='h4' sx={{marginBottom: '.5em'}}>{sort.title.toUpperCase()}</Typography>
                    <Autocomplete
                        multiple
                        options={sort.value}
                        getOptionLabel={(option) => option.name}
                        renderInput={(params) => <TextField {...params} className='filters__select-input' label="Сортировать по" variant="filled" />}
                    />
                </div>
        }
    }

    const sorting = [
        {title: 'сортировка', type: 'select', value: [{name: 'новейшие'}, {name: 'популярное'}]},
        {title: 'авторы', type: 'select', value: [{name: 'Автор1'}, {name: 'Автор2'}]},
        {title: 'категории', type: 'checkbox', value: [{name: 'Unity', count: 123}, {name: 'C#', count: 12}]}
    ]

    return (
        <div className='filters'>
            {sorting.map(sort => getSorting(sort))}
        </div>
    );
};

export default Filters;