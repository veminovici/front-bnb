import PokemonGrid from '@/components/pokemon-grid'
import { getPokemonList } from '@/lib/pokemon-api'

export default async function Home() {
  // Load data
  const pokemonList = await getPokemonList();

  // Pass the data to the client component
  return (
    <PokemonGrid pokemonList={pokemonList} />
  )
}
