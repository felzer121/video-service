import React from "react";
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    palette: {
      primary: {
        main: '#FFBE2E',
      },
      secondary: {
        main: '#C4C4C4',
      },
      action: {
        disabledBackground: '#756C59',
        disabled: '#000'
      }
    },
    typography: {
      h2: {
        fontFamily: 'Inter, sans-serif',
        fontSize: '28px',
        fontWeight: 700
      },
      h4: {
        fontFamily: 'Inter, sans-serif',
        fontSize: '18px',
        fontWeight: 700
      },
      h5: {
        fontFamily: 'Inter, sans-serif',
        fontSize: '16px',
        color: '#C4C4C4',
        fontWeight: 400
      },
      h6: {
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        color: '#C4C4C4',
        fontWeight: 400,
        '&:after': {
          content: '" ]"'
        },
        '&:before': {
          content: '"[ "'
        }
      },
      body2: {
        fontFamily: 'Inter, sans-serif',
        fontSize: '16px',
        fontWeight: 300,
      },
      body1: {
        fontFamily: 'Inter, sans-serif',
        fontSize: '16px',
        fontWeight: 400,
      }
    },
});

export const withTheme = (Component: React.FunctionComponent) => (props: any) => {
    return (
        <ThemeProvider theme={theme}>
            <Component {...props} />
        </ThemeProvider>
    )
}
