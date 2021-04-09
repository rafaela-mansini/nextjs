import { useRouter } from 'next/router'

import Layout from 'components/Layout'
import Wrapper from 'components/Wrapper'

const ResourceDetail = ({ resource }) => {

  const router = useRouter()
  if(router.isFallback){
    return <div>Loading...</div>
  }

  return(

    <Layout>
      <Wrapper>
        <section className="hero ">
          <div className="hero-body">
            <div className="container">

              <section className="section">
                <div className="columns">
                  <div className="column is-8 is-offset-2">
                    <div className="content is-medium">
                      <h2 className="subtitle is-4">{resource.createdAt}</h2>
                      <h1 className="title">{resource.title}</h1>
                      <p>{resource.description}</p>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </section>
      </Wrapper>
    </Layout>
  )
}

// ResourceDetail.getInitialProps = async ({ query }) => {
//   const dataResponse = await fetch(`http://localhost:3001/api/resources/${query.id}`)
//   const data = await dataResponse.json()

//   return {
//     resource: data
//   }
// }

// we can use params or query (with query we can get the query in URL)
// export async function getServerSideProps({ query }) {
//   const dataResponse = await fetch(`http://localhost:3001/api/resources/${query.id}`)
//   const data = await dataResponse.json()

//   return {
//     props: {
//       resource: data
//     }
//   }
// }

// percorre os resources que deverão ser criados
export async function getStaticPaths(){

  const response = await fetch("http://localhost:3001/api/resources")
  const data = await response.json()
  const paths = data.map(resource => {
    return{
      params: { id: resource.id }
    }
  })

  return {
    paths,
    // false: means that other routes should resolve into 4040 page
    fallback: true
  }
}

// função que exporta de forma estática, precisa existir as páginas mas é bacana pois é cacheado, então é extremamente rapido.
export async function getStaticProps({ params }){
  const response = await fetch(`http://localhost:3001/api/resources/${params.id}`)
  const data = await response.json()

  return {
    props: {
      resource: data
    }
  }
}


export default ResourceDetail