// Simuler un service API pour les trades

const fakeTrades = [
  {
    id: '1',
    pair: 'EUR/USD',
    dateOpen: '2025-05-20T10:00:00Z',
    dateClosed: '2025-05-21T15:30:00Z',
    direction: 'Long',
    result: '+150 pips',
    comment: 'Bonne entrée, suivi parfait',
  },
  {
    id: '2',
    pair: 'GBP/USD',
    dateOpen: '2025-05-22T11:00:00Z',
    dateClosed: '2025-05-23T14:00:00Z',
    direction: 'Short',
    result: '-50 pips',
    comment: 'Trop tôt sur la sortie',
  },
]

const fetchTrades = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(fakeTrades), 1000)
  })
}

export default { fetchTrades }
