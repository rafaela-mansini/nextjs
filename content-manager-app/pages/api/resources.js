// esta função é para evitar erro de CORS, envia por use effect a chamada para o localhost:3000, ou seja para esta função, e ela que faz a chamada para a URL externa
export default async function(req, res){
  if(req.method === "GET"){
    const dataRes = await fetch("http://localhost:3001/api/resources")
    const data = await dataRes.json()
  
    res.send(data)
  }

  if(req.method === "POST"){
    return res.send("Data has been received!")
  }
}