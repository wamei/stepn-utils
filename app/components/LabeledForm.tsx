import React, { FC, ReactNode } from 'react'
import { Col, Form } from 'react-bootstrap'

type LabeledFormProps = {
  children: ReactNode
  label: ReactNode
  className?: string
}

export const LabeledForm: FC<LabeledFormProps> = ({ children, label, className }) => {
  return (
    <Form.Group as={Col} className={`${className}`}>
      <Form.Label style={{ transform: 'scale(.82)' }} className='text-muted'>
        {label}
      </Form.Label>
      <Col>{children}</Col>
    </Form.Group>
  )
}
