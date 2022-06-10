import React, { FC } from 'react'
import { SneakerTypeSelector } from './SneakerTypeSelector'
import { ShoeRareritySelector } from './ShoeRareritySelector'
import { Shoe } from 'app/models/Shoe'
import { Col, Form, Row } from 'react-bootstrap'

type SneakerSelectorProps = {
  shoe: Shoe
  setShoe(shoe: Shoe | ((shoe: Shoe) => Shoe)): void
}
export const SneakerSelector: FC<SneakerSelectorProps> = ({ shoe, setShoe }) => {
  return (
    <Row>
      <Col className='text-center' style={{ height: '70px' }}>
        <img src={`/stepn-utils/${shoe.type}.svg`} width='100' className='mb-2' />
      </Col>
      <SneakerTypeSelector
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
        value={shoe.rarerity}
        onChange={r =>
          setShoe(old => ({
            ...old,
            rarerity: r,
          }))
        }
        className='mb-2'
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
