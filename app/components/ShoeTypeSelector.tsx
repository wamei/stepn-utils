import { ShoeType } from 'app/models/ShoeType'
import React, { FC } from 'react'
import { ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap'

type ShoeTypeSelectorProps = {
  value: ShoeType
  onChange(v: ShoeType): void
  className?: string
}

export const ShoeTypeSelector: FC<ShoeTypeSelectorProps> = ({ value, onChange, className }) => {
  return (
    <>
      <DropdownButton
        as={ButtonGroup}
        variant='light'
        size='sm'
        title={value}
        className={className}
      >
        {Object.values(ShoeType).map(type => (
          <Dropdown.Item key={type} onClick={() => onChange(type)}>
            {type}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </>
  )
}
