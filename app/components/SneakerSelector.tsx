import React, { FC } from 'react'
import { SneakerTypeSelector } from './SneakerTypeSelector'
import { SneakerRaritySelector } from './SneakerRaritySelector'
import { Sneaker } from 'app/models/Sneaker'
import { Col, Form, Row } from 'react-bootstrap'

type SneakerSelectorProps = {
  sneaker: Sneaker
  setSneaker: React.Dispatch<React.SetStateAction<Sneaker>>
}
export const SneakerSelector: FC<SneakerSelectorProps> = ({ sneaker, setSneaker }) => {
  return (
    <Row>
      <Col className='text-center' style={{ height: '70px' }}>
        <img src={`/stepn-utils/${sneaker.type}.svg`} width='100' className='mb-2' />
      </Col>
      <SneakerTypeSelector
        className='mb-2'
        value={sneaker.type}
        onChange={t =>
          setSneaker(old => ({
            ...old,
            type: t,
          }))
        }
      />
      <SneakerRaritySelector
        value={sneaker.rarity}
        onChange={r =>
          setSneaker(old => ({
            ...old,
            rarity: r,
          }))
        }
        className='mb-2'
      />
      <Form.Range
        value={sneaker.mint}
        min={0}
        max={7}
        onChange={e => {
          setSneaker(old => ({
            ...old,
            mint: Number(e.target.value),
          }))
        }}
      />
      <Col>Mint {sneaker.mint}</Col>
    </Row>
  )
}
