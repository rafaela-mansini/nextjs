import Layout from 'components/Layout'
import Wrapper from 'components/Wrapper'

const ResourceDetail = ({ resource }) => {
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

// we can use params or query (with query we can get the query in URL)
export async function getServerSideProps({ query }) {
  const dataResponse = await fetch(`http://localhost:3001/api/resources/${query.id}`)
  const data = await dataResponse.json()

  return {
    props: {
      resource: data
    }
  }
}

export default ResourceDetail