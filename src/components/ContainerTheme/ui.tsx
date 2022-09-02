import { Grid } from "@mui/material"
import { CardTheme } from "../CardTheme/ui"
import './style.scss'

export const ContainerTheme = () => {
    const themes = [
        {id: '1', title: 'js'},
        {id: '2', title: 'js'},
        {id: '3', title: 'js'},
        {id: '4', title: 'js'},
        {id: '5', title: 'js'},
        {id: '6', title: 'js'},
        {id: '7', title: 'js'},
        {id: '8', title: 'js'}
    ]

    return (
        <div className="containerTheme">
            <Grid container spacing={{ xs: 3, md: 3, lg: 3, colXl: 4 }} columns={{ xs: 2, sm: 8, md: 12, lg: 12 }}>
                {themes.map((theme) => (
                    <Grid key={theme.id} item xs={2} sm={4} md={4} lg={3}>
                        <CardTheme />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}