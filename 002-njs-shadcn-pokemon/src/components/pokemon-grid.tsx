"use client"

import { useState } from "react"
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export default function PokemonGrid() {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <div>
        <h3 className="text-2xl py-6 text-center">Search for your Pokemon!</h3>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="pokemonName">Pokemon name</Label>
          <Input
            type="text"
            value={searchText}
            id="pokemonName"
            autoComplete="off"
            placeholder="Charizard, Pikachu, etc."
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>
    </>
  )
}