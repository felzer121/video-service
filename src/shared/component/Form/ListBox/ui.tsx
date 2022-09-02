
import { styled } from '@mui/material/styles'
import { autocompleteClasses } from '@mui/material/Autocomplete'

export const Listbox = styled('ul')(
    ({ theme }) => `
    width: 100%;
    margin: 2px 0 0;
    padding: 0;
    font-size: 14px;
    color: #C4C4C4;
    font-weight: 300;
    position: absolute;
    list-style: none;
    background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
    overflow: auto;
    max-height: 250px;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    z-index: 1;
    box-shadow: 4px 4px 20px 2px rgba(226, 226, 226, 0.05);
    & li {
      padding: 8px 12px;
      display: flex;
      align-items: center;
      & span {
        flex-grow: 1;
        :first-letter {
          text-transform: uppercase;
        }
      }
      & .selectDropbox__icon {
        display: flex;
        align-items: center;
        & svg {
          margin-right: 6px;
          font-size: 22px;
          color: #fff;
        }
      }
      & svg {
        color: transparent;
      }
    }
    & li[aria-selected='true'] {
      background-color: ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#fafafa'};
      font-weight: 600;
  
      & svg {
        color: ${theme.palette.primary.main};
      }
    }
  
    & li.${autocompleteClasses.focused} {
      background-color: ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#e6f7ff'};
      cursor: pointer;
  
      & svg {
        color: ${theme.palette.primary.main};
      }
    }
  `,
  );