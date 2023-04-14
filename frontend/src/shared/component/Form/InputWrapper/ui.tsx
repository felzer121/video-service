import { styled } from '@mui/material/styles'

export const InputWrapper = styled('div')(
    ({ theme }) => `
    width: 100%;
    min-height: 36px;
    background-color: ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#fff'};
    border-radius: 4px;
    padding: 1px;
    cursor: pointer;
    display: flex;
    outline: none;
    align-items: center;
    flex-wrap: wrap;
  
    &:hover {
      border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
    }
  
    // &.focused {
    //   border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
    //   box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    // }
  
    & input {
      font-family: inherit;
      text-transform: uppercase;
      font-size: 12px;
      cursor: pointer;
      outline: none;
      min-height: 36px;
      background-color: ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.0)' : '#fff'};
      color: ${
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,.85)'
      };
      height: 30px;
      box-sizing: border-box;
      padding: 4px 6px;
      width: 0;
      min-width: 30px;
      flex-grow: 1;
      border: 0;
      margin: 0;
      outline: 0;
    }
  `,
  );