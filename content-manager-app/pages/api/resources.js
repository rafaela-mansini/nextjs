import axios from 'axios'

// esta função é para evitar erro de CORS, envia por use effect a chamada para o localhost:3000, ou seja para esta função, e ela que faz a chamada para a URL externa
export default async function(req, res){
  if(req.method === "GET"){
    const dataRes = await fetch("http://localhost:3001/api/resources")
    const data = await dataRes.json()
  
    res.send(data)
  }

  if(req.method === "POST" || req.method === 'PATCH'){ 
    const { id, title, description, link, priority, timeToFinish, active} = req.body
    if(!title || !description || !link || !priority || !timeToFinish){
      return res.status(422).send("Data are missing!")
    }

    const url = req.method === 'POST' 
      ? "http://localhost:3001/api/resources" 
      : `http://localhost:3001/api/resources/${id}`

      console.log(url)

    try {
      const axiosRes = await axios[req.method.toLowerCase()](url, req.body)
      return res.send(axiosRes.data)
    } catch (err) {
      return res.status(422).send("Data cannot be stored!")
    }
  }
}