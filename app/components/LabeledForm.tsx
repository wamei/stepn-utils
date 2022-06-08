import React, { FC, ReactNode } from 'react'
import { Col, Form } from 'react-bootstrap'

type LabeledFormProps = {
  children: ReactNode
  label: string
  className?: string
}

export const LabeledForm: FC<LabeledFormProps> = ({ children, label, className }) => {
  return (
    <Form.Group as={Col} className={className}>
      <Form.Label>
        <small>{label}</small>
      </Form.Label>
      <Col>{children}</Col>
    </Form.Group>
  )
}
