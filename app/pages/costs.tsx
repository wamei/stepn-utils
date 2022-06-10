import { BlitzPage } from 'blitz'
import { Container } from 'react-bootstrap'
import { HomeSection } from 'app/components/HomeSection'
import Layout from 'app/layouts/Layout'

const Costs: BlitzPage = () => {
  return (
    <Container className='mt-2' style={{ maxWidth: '540px' }}>
      <HomeSection />
    </Container>
  )
}

Costs.suppressFirstRenderFlicker = true
Costs.getLayout = page => <Layout title='Minting Cost Table'>{page}</Layout>

export default Costs
