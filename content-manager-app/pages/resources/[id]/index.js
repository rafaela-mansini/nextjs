import Link from 'next/link'
import axios from 'axios'

import Layout from 'components/Layout'
import Wrapper from 'components/Wrapper'

const ResourceDetail = ({ resource }) => {

  const activateResource = () => {
    axios.patch("/api/resources", {...resource, status: "active"})
      .then(_=> alert("Resources has been updated"))
      .catch(_=> alert('Cannot activate the resource!'))
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
                      <p>Time to finish: {resource.timeToFinish} minutes</p>
                      <Link href={`/resources/${resource.id}/edit`}>
                        <a className="button">Update</a>
                      </Link>
                      <button 
                        onClick={activateResource}
                        className="button is-success ml-3">
                        Activate
                      </button>
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

export async function getServerSideProps({ params }){
  const response = await fetch(`http://localhost:3001/api/resources/${params.id}`)
  const data = await response.json()

  return {
    props: {
      resource: data
    }
  }
}


export default ResourceDetail