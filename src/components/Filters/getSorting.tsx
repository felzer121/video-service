import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import React from 'react';
import { Select } from '../../shared/component/Form/Select/ui';
import { MultiSelect } from '../../shared/component/Form/MultiSelect/ui';

export interface sortingType {
    title: string
    type: string
    icon?: React.ReactNode 
    label?: string
    value: Array<{
        name: string
        count?: number
    }>
}

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
]

export const getSorting = (sort: sortingType): React.ReactNode => {
    switch(sort.type) {
        case 'select' :
            return <div className='filters__select'>
                <Typography variant='h4' sx={{marginBottom: '.5em'}}>{sort.title.toUpperCase()}</Typography>
                <Select options={top100Films} sort={sort} />
            </div>
        case 'multiselect' :
            return <div className='filters__multiselect'>
                <Typography variant='h4' sx={{marginBottom: '.5em'}}>{sort.title.toUpperCase()}</Typography>
                <MultiSelect options={top100Films} sort={sort} />
            </div>
        case 'dropbox' :
            return <div className='filters__dropbox'>
                <div className='filters__dropboxTitle'>
                    <div className='filters__dropboxTitle-svg'>{sort.icon}</div>
                    <Typography variant='h4' sx={{marginBottom: '.5em'}}>
                        {sort.title.toUpperCase()}
                    </Typography>
                </div>
                <FormGroup className='filters__dropboxContent'>
                    {sort.value.map((checkbox, index) => (
                        <FormControlLabel key={index} control={<Checkbox />} label={checkbox.name} />
                    ))}
                </FormGroup>
            </div>
    }
}