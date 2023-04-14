import React from 'react'
import {
  useAutocomplete,
} from '@mui/base/AutocompleteUnstyled';
import CheckIcon from '@mui/icons-material/Check';
import { sortingType } from '../../../../components/Filters/getSorting';
import { InputWrapper } from '../InputWrapper/ui';
import { Listbox } from '../ListBox/ui';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { IconButton } from '@mui/material';

interface SelectProps {
  sort: sortingType
}

export const Select = ({sort}: SelectProps) => {
  const {
    getRootProps,
    getInputProps,
    getClearProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: 'customized-hook-demo',
    options: sort.value,
    getOptionLabel: (option) => option.name,
  });

  
  return (
    <>
      <div {...getRootProps()}>
          <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
              <input {...getInputProps()} placeholder={value ? '' : sort.label} />
              {value ? <div {...getClearProps()}><IconButton><CloseRoundedIcon sx={{fontSize: "20px"}} /></IconButton></div> : ''}
          </InputWrapper>
      </div>
      {groupedOptions.length > 0 ? (
          <Listbox {...getListboxProps()}>
          {(groupedOptions as typeof sort.value).map((option, index) => (
              <li {...getOptionProps({ option, index })}>
                <div className='selectDropbox__icon'>{option.icon}</div>
                <span>{option.name}</span>
              </li>
          ))}
          </Listbox>
      ) : null}
    </>
  )
}