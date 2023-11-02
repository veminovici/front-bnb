import React from 'react'

export default async function PokemonPage({ params } : { params: { pokemonName: string } }) {
  const { pokemonName } = params;

  return (
    <>
      <h1 className="text-4xl text-bold pt-4">{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h1>
    </>
  )
}
