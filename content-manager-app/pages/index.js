import Layout from 'components/Layout'
import ResourceHighlight from 'components/ResourceHighlight'
import Newsletter from 'components/Newsletter'
import ResourceList from 'components/ResourceList'
import { useEffect } from 'react'

function Home({ resources }) {
  
  // useEffect(() => {
  //   fetch("http://localhost:3000/api/resources");
  // }, [])

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

export async function getServerSideProps(){
  const resData = await fetch("http://localhost:3001/api/resources")
  const data = await resData.json()
  return {
    props: {
      resources: data
    }
  }
}

export default Home