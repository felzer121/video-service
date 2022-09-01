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
  options: Array<{
    title: string;
    year: number;
  }>
  sort: sortingType
}

export const Select = ({options, sort}: SelectProps) => {
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
    options: options,
    getOptionLabel: (option) => option.title,
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
          {(groupedOptions as typeof options).map((option, index) => (
              <li {...getOptionProps({ option, index })}>
                <span>{option.title}</span>
                <CheckIcon fontSize="small" />
              </li>
          ))}
          </Listbox>
      ) : null}
    </>
  )
}