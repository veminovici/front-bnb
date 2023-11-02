import PokemonGrid from '@/components/pokemon-grid'
import Image from 'next/image'

export default function Home() {
  // Load data

  // Pass the data to the client component
  return (
    <div className='mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left'>
      <PokemonGrid></PokemonGrid>
    </div>
  )
}
