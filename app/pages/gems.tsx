import { BlitzPage } from 'blitz'
import { Container } from 'react-bootstrap'
import { GemSection } from 'app/components/GemSection'
import Layout from 'app/layouts/Layout'

const Gems: BlitzPage = () => {
  return (
    <Container className='mt-2'>
      <GemSection />
    </Container>
  )
}

Gems.suppressFirstRenderFlicker = true
Gems.getLayout = page => <Layout title='Gems'>{page}</Layout>

export default Gems
