import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <Head>
        <title>Taberna do Dragão</title>
      </Head>
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-yellow-400">Taberna do Dragão</h1>
        <p className="text-gray-300 mt-2">Escolha o que deseja fazer:</p>
      </header>
      <main className="space-y-6">
        <Link href="/aventura">
          <a className="block p-4 bg-yellow-600 hover:bg-yellow-700 rounded shadow">📜 Ir para a Aventura</a>
        </Link>
        <Link href="/fichas">
          <a className="block p-4 bg-blue-600 hover:bg-blue-700 rounded shadow">📘 Ver Fichas</a>
        </Link>
        <Link href="/acoes">
          <a className="block p-4 bg-green-600 hover:bg-green-700 rounded shadow">🎲 Enviar Ação</a>
        </Link>
        <Link href="/mestre">
          <a className="block p-4 bg-purple-600 hover:bg-purple-700 rounded shadow">🧙 Painel do Mestre</a>
        </Link>
      </main>
    </div>
  );
}