import React, {useState, useEffect} from 'react';
import PokemonList from './PokemonList'
import axios from 'axios'
import Pagination from './Pagination'
function App() {
    // Actual pokemon, and the data that is use to modify the new pokemon
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setcurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)
    // Everytime our appract changes, instread of rerendering it, it will
    // change if there is a change within the entire array
    // Will only run one single time
  useEffect(()=> {
    setLoading(true)
    let cancel
      // This is called an effect, that often happens once we render our applicaiton
    axios.get(currentPageUrl, {
        cancelToken: new axios.CancelToken(c => cancel  = c)
    }).then(res => {
        setLoading(false)
        setNextPageUrl(res.data.next)
        setPrevPageUrl(res.data.previous)
        setPokemon(res.data.results.map(p => p.name))
  })

  return () => cancel()
  }, [currentPageUrl])

  function gotoNextPage(){
      setcurrentPageUrl(nextPageUrl)
  }

  function gotoPrevPage(){
      setcurrentPageUrl(prevPageUrl)
  }
    if(loading) return "Loading...."
  return (
    <div>
    <PokemonList pokemon = {pokemon} />
    <Pagination
      gotoNextPage = {nextPageUrl ? gotoNextPage: null}
      gotoPrevPage = {prevPageUrl ? gotoPrevPage: null}
    />

    </div>
  );
}

export default App;
