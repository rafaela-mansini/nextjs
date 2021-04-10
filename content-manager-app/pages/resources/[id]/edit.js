import Layout from 'components/Layout'
import Wrapper from 'components/Wrapper'
import ResourceForm from 'components/ResourceForm'
import axios from 'axios'
import { useRouter } from 'next/router'

const ResourceEdit = ({resource}) => {

  const router = useRouter()

  const updateResource = (formData) => {
    axios.patch("/api/resources", formData)
      .then(_ => alert("Resource has been updated"))
      .catch(err => alert(err?.response?.data))
  }

  return(
    <Layout>
      <Wrapper>
        <ResourceForm onFormSubmit={updateResource} titleForm="Edit" resource={resource} />
      </Wrapper>
    </Layout>
  )
}

export async function getServerSideProps({ params }){
  const response = await fetch(`http://localhost:3001/api/resources/${params.id}`)
  const data = await response.json()
  
  return {
    props:{
      resource: data
    }
  }
}

export default ResourceEdit