import './App.css'
import Card from './Card'
import pokemons from './data.json'

export default function App() {
  return (
    <div className="App">
      {pokemons.map(pokemon => {
        const { name, images, types } = pokemon
        return <Card name={name.toUpperCase()} images={images} types={types} />
      })}
    </div>
  )
}
