import Image from 'next/image'
import UsersTable from './components/UsersTable' // Pfad zu Ihrer UsersTable-Komponente

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-800">
      <UsersTable />
    </main>
  )
}