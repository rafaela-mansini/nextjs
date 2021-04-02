import Layout from 'components/Layout'
import ResourceHighlight from 'components/ResourceHighlight'
import Newsletter from 'components/Newsletter'
import ResourceList from 'components/ResourceList'

import { resources } from 'api/data'

function Home() {

  return (
    <>
      <Layout>
        <ResourceHighlight resources={resources.slice(0,2)} />
        <Newsletter />
        <ResourceList resources={resources.slice(2)} />
      </Layout>
    </>
  )
}

export default Home