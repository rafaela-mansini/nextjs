import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from "axios"

const ActiveResource = () => {
  const [resource, setResource] = useState({})

  useEffect(() => {
    async function fetchResource() {
      const response = await axios.get("/api/activeresource")
      const data = response.data

      setResource(data)
    }

    fetchResource()
  }, [])

  return(
    <div className="active-resource">
      <h1 className="resource-name">{resource.title}</h1>
      <div className="time-wrapper">
        <h2 className="elapsed-time">1400</h2>
      </div>
      <Link href="/">
        <a className="button">Go to resource</a>
      </Link>
    </div>
  )
}

export default ActiveResource