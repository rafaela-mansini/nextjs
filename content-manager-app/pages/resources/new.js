import axios from 'axios'
import { useRouter } from 'next/router'

import Layout from 'components/Layout'
import Wrapper from 'components/Wrapper'
import ResourceForm from 'components/ResourceForm'

const ResourceCreate = () => {

  const router = useRouter()

  const createResource = (formData) => {
    axios.post("/api/resources", formData)
      .then((res) => {
        alert(res?.data)
        router.push('/')
      })
      .catch((error) => alert(error?.response?.data))
  }

  return(
    <Layout>
      <Wrapper>
        <ResourceForm onFormSubmit={createResource} />
      </Wrapper>
    </Layout>
  )

}

export default ResourceCreate