import Image from 'next/image'
import UsersTable from './components/UsersTable' // Pfad zu Ihrer UsersTable-Komponente
import HeroImage from './components/HeroImage'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      
      <UsersTable />
      
    </main>
  )
}