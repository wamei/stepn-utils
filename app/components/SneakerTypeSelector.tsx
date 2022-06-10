import { SneakerType } from 'app/models/SneakerType'
import React, { FC } from 'react'
import { ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap'

type SneakerTypeSelectorProps = {
  value: SneakerType
  onChange(v: SneakerType): void
  className?: string
}

export const SneakerTypeSelector: FC<SneakerTypeSelectorProps> = ({
  value,
  onChange,
  className,
}) => {
  return (
    <>
      <DropdownButton
        as={ButtonGroup}
        variant='light'
        size='sm'
        title={value}
        className={className}
      >
        {Object.values(SneakerType).map(type => (
          <Dropdown.Item key={type} onClick={() => onChange(type)}>
            {type}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </>
  )
}
