import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: '#111', color: '#fff', padding: '2rem' }}>
      <Head>
        <title>Taberna do Dragão</title>
      </Head>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'yellow' }}>Taberna do Dragão</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ marginBottom: '1rem' }}>
          <Link href="/aventura">
            <a style={{ background: 'goldenrod', padding: '0.5rem 1rem', color: '#111', textDecoration: 'none' }}>
              📜 Ir para a Aventura
            </a>
          </Link>
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <Link href="/fichas">
            <a style={{ background: 'teal', padding: '0.5rem 1rem', color: '#fff', textDecoration: 'none' }}>
              📘 Ver Fichas
            </a>
          </Link>
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <Link href="/acoes">
            <a style={{ background: 'green', padding: '0.5rem 1rem', color: '#fff', textDecoration: 'none' }}>
              🎲 Enviar Ação
            </a>
          </Link>
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <Link href="/mestre">
            <a style={{ background: 'purple', padding: '0.5rem 1rem', color: '#fff', textDecoration: 'none' }}>
              🧙 Painel do Mestre
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
