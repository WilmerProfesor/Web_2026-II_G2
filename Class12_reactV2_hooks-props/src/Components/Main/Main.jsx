import { useState, useEffect } from 'react'
import './Main.css'
import CardTest from '../CardTest/CardTest'
import CardCharacter from '../CardCharacter/CardCharacter'

const Main = () => {

    const [count, setCount] = useState(0);
    const [characters, setCharacters] = useState([]);


    useEffect(() => {
        //lo que escriba aquí se dispara al renderizar el componente
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => setCharacters(data.results));
    }, [])

    const handleIncrement = () => {
        setCount(count + 1)
    }
    
  return (
        <main>
            Main valor del estado count: {count}
            <button onClick={handleIncrement}>Incrementar</button>
            <button onClick={() => {setCount(count - 1)}}>Decrementar</button>
            <CardTest title="Tarjeta de prueba" message="Hola, soy un mensaje de prueba" />
            {
                characters.map(character => (                    
                    <CardCharacter key={character.id} character={character} />
                ))

            }
            
            
            
            
        </main>
    )
}

export default Main