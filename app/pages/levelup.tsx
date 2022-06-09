import { LevelUpCostTable } from 'app/components/LevelUpCostTable'
import { RealmSelector } from 'app/components/RealmSelector'
import React, { useContext } from 'react'
import { Container, Row } from 'react-bootstrap'
import Layout, { Context } from 'app/layouts/Layout'
import { BlitzPage } from 'blitz'

const Levelup: BlitzPage = () => {
  const context = useContext(Context)
  const { realm, setRealm, crypts } = context

  return (
    <Container className='mt-2' style={{ maxWidth: '540px' }}>
      <Row className='mb-2'>
        <RealmSelector value={realm} onChange={setRealm} />
      </Row>
      <LevelUpCostTable crypts={crypts} realm={realm} />
      <div className='text-end'>
        <small>最終更新日時 {crypts[0]?.lastUpdatedAt.toLocaleString()}</small>
      </div>
    </Container>
  )
}

Levelup.suppressFirstRenderFlicker = true
Levelup.getLayout = page => <Layout title='Levelup'>{page}</Layout>

export default Levelup
