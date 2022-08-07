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
        {id: '6', title: 'js'}
    ]

    return (
        <div className="containerTheme">
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {themes.map((theme) => (
                    <Grid item xs={2} sm={4} md={4} key={theme.id}>
                        <CardTheme />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}