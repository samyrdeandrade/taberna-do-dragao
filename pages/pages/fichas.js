export default function Fichas() {
  return (
    <div style={{ minHeight: '100vh', background: '#111', color: '#fff', padding: '2rem' }}>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Fichas dos Personagens</h1>
      <p>Aqui você poderá visualizar e editar as fichas de cada jogador.</p>
      <ul>
        <li><strong>Papa:</strong> Clérigo de Wynna...</li>
        <li><strong>Presto:</strong> Mago improvisador...</li>
        <li><strong>Kael’thar:</strong> Guerreiro místico (NPC)...</li>
      </ul>
    </div>
  )
}
