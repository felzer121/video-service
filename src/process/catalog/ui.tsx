import { Grid } from '@mui/material';
import React from 'react';
import { BlockTitle } from '../../components/BlockTitle/ui';
import { Container } from '../../components/Container/ui';
import Filters from '../../components/Filters/ui';
import './style.scss'

const Catalog = () => {
    return (
        <Container>
            <div className='catalog'>
                <Grid container spacing={4}>
                    <Grid item md={4} lg={3} xl={2.5}>
                        <Filters />
                    </Grid>
                    <Grid item md={8} lg={9} xl={9.5}>
                        <BlockTitle title='По теме JavaScript' subTitle='Всего 24' marginTop='0' />
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
};

export default Catalog;