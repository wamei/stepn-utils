import { DonationCard } from 'app/components/DonationCard'
import { BlitzPage } from 'blitz'
import { Container } from 'react-bootstrap'
import { HomeSection } from 'app/components/HomeSection'
import Layout from 'app/layouts/Layout'

const Costs: BlitzPage = () => {
  return (
    <div>
      <Container className='mt-2' style={{ maxWidth: '540px' }}>
        <HomeSection />
      </Container>
      <hr />
      <Container style={{ maxWidth: '540px' }}>
        <DonationCard className='border-0' />
      </Container>
    </div>
  )
}

Costs.suppressFirstRenderFlicker = true
Costs.getLayout = page => <Layout title='Costs'>{page}</Layout>

export default Costs
