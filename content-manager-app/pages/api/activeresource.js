import axios from "axios"

export default async function activeresource(req, res){
  const response = await axios.get("http://localhost:3001/api/activeresource")
  const resource = response.data

  return res.send(resource)
}