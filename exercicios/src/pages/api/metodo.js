export default (req, res) => {
    if(req.method === 'GET') {
      res.status(200).json({ name: "João" })
    } else {
      res.status(200).json({ name: "Maria" })
    }
    
    res.status(200).json({
      metodo: req.method
    })
  }