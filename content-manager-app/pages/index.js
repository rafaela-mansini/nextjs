import Layout from 'components/Layout'
import ResourceHighlight from 'components/ResourceHighlight'
import Newsletter from 'components/Newsletter'
import ResourceList from 'components/ResourceList'

import { resources } from 'api/data'

function Home() {

  return (
    <>
      <Layout>
        <ResourceHighlight resources={resources} />
        <Newsletter />
        <ResourceList />
      </Layout>
    </>
  )
}

export default Home