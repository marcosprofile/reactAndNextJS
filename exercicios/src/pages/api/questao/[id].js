export default function questao(req, res) {
    if (req.method === 'GET') {
      get(req, res)
    } else {
      res.status(405).send
    }
  }
  
  function get(req, res) {
    const id = req.query.id
    res.status(200).json({
      id,
      enunciado: 'Quais são suas cores favoritas?',
      respostas: [
        ' Indigo ', ' Crimson ', ' Silver ', ' Green ', ' Amarelo '
      ]
    })
  }