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
import { StyledTag } from '../StyledTag/ui';

interface SelectProps {
  options: Array<{
    title: string;
    year: number;
  }>
  sort: sortingType
}

interface FilterOptionType {
    title: string
}

export const MultiSelect = ({options, sort}: SelectProps) => {
  const {
    getRootProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    multiple: true,
    id: 'customized-hook-demo',
    options: options,
    getOptionLabel: (option) => option.title,
  });

  
  return (
    <>
      <div {...getRootProps()}>
          <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
                {value.map((option: FilterOptionType, index: number) => (
                    <StyledTag label={option.title} {...getTagProps({ index })} />
                ))}
                <input {...getInputProps()} placeholder={value.length ? '' : sort.label} />
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