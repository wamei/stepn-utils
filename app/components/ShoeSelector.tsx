import React, { FC } from 'react'
import { ShoeTypeSelector } from './ShoeTypeSelector'
import { ShoeRareritySelector } from './ShoeRareritySelector'
import { Shoe } from 'app/models/Shoe'
import { Col, Form, Row } from 'react-bootstrap'

type ShoeSelectorProps = {
  id: string
  shoe: Shoe
  setShoe(shoe: Shoe | ((shoe: Shoe) => Shoe)): void
}
export const ShoeSelector: FC<ShoeSelectorProps> = ({ id, shoe, setShoe }) => {
  return (
    <Row>
      <Col className='text-center' style={{ height: '70px' }}>
        <img src={`/stepn-utils/${shoe.type}.svg`} width='100' className='mb-2' />
      </Col>
      <ShoeTypeSelector
        className='mb-2'
        value={shoe.type}
        onChange={t =>
          setShoe(old => ({
            ...old,
            type: t,
          }))
        }
      />
      <ShoeRareritySelector
        id={id}
        value={shoe.rarerity}
        onChange={r =>
          setShoe(old => ({
            ...old,
            rarerity: r,
          }))
        }
      />
      <Form.Range
        value={shoe.mint}
        min={0}
        max={7}
        onChange={e => {
          setShoe(old => ({
            ...old,
            mint: Number(e.target.value),
          }))
        }}
      />
      <Col>Mint {shoe.mint}</Col>
    </Row>
  )
}
