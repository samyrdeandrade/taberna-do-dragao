import { useState } from 'react'

export default function Acoes() {
  const [acoes, setAcoes] = useState({})
  const [mensagem, setMensagem] = useState('')

  const jogadores = ['Samyr', 'Felipe']

  function enviarAcao(jogador) {
    if (!mensagem.trim()) return
    setAcoes(prev => ({ ...prev, [jogador]: mensagem }))
    setMensagem('')
  }

  const todosEnviaram = jogadores.every(j => acoes[j])

  return (
    <div style={{ minHeight: '100vh', background: '#111', color: '#fff', padding: '2rem' }}>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Enviar Ação</h1>

      <div>
        {jogadores.map(j => (
          <div key={j}>
            {acoes[j]
              ? <p style={{ color: 'lime' }}>Ação de {j} enviada</p>
              : <p style={{ color: 'tomato' }}>Aguardando ação de {j}...</p>
            }
          </div>
        ))}
      </div>

      {!todosEnviaram && (
        <div style={{ marginTop: '1rem' }}>
          <textarea
            rows={3}
            value={mensagem}
            onChange={e => setMensagem(e.target.value)}
            style={{ width: '100%', padding: '0.5rem' }}
          />
          {jogadores.map(j => (
            !acoes[j] && (
              <button
                key={j}
                onClick={() => enviarAcao(j)}
                style={{ margin: '0.5rem', background: 'blue', color: '#fff', padding: '0.5rem 1rem' }}
              >
                Enviar como {j}
              </button>
            )
          ))}
        </div>
      )}

      {todosEnviaram && (
        <p style={{ marginTop: '1rem', background: '#333', padding: '1rem' }}>
          Todas as ações foram enviadas! O Mestre pode continuar a história.
        </p>
      )}
    </div>
  )
}
