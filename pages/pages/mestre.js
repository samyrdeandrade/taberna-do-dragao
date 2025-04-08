import { useEffect, useState } from 'react'

export default function Mestre() {
  const [acoes, setAcoes] = useState({})
  const jogadores = ['Samyr', 'Felipe']

  useEffect(() => {
    // Não estamos salvando no localStorage, mas poderíamos
    // se fosse o caso: 
    // const saved = localStorage.getItem('acoes')
    // if (saved) setAcoes(JSON.parse(saved))

    // Aqui, a lógica atual só simula
  }, [])

  function limparAcoes() {
    setAcoes({})
  }

  return (
    <div style={{ minHeight: '100vh', background: '#111', color: '#fff', padding: '2rem' }}>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Painel do Mestre</h1>
      <p>Aqui o Mestre vai ver todas as ações enviadas pelos jogadores.</p>

      <div style={{ marginTop: '1rem' }}>
        {jogadores.map(j => (
          <div key={j} style={{ marginBottom: '0.5rem' }}>
            <strong>{j}:</strong> {acoes[j] || <span style={{ color: 'tomato' }}>Sem ação</span>}
          </div>
        ))}
      </div>

      <button
        onClick={limparAcoes}
        style={{ marginTop: '1rem', background: 'green', color: '#fff', padding: '0.5rem 1rem' }}
      >
        Continuar História (limpar ações)
      </button>
    </div>
  )
}
