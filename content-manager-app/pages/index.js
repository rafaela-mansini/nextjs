import Layout from 'components/Layout'
import ResourceHighlight from 'components/ResourceHighlight'
import Newsletter from 'components/Newsletter'
import ResourceList from 'components/ResourceList'



function Home() {

  return (
    <>
      <Layout>
        <ResourceHighlight />
        <Newsletter />
        <ResourceList />
      </Layout>
    </>
  )
}

export default Home