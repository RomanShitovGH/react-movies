import React, {useState, useEffect} from "react"
import CardList from "../components/CardList"
import Preloader from "../components/Preloader"
import { Search } from "../components/Search"

const API_KEY = process.env.REACT_APP_API_KEY

function Main() {
   
    const [cardList, setCardList] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const updateSearch = (t, y, type) => {        
        setLoading(true);
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}`
            .concat(t ? '&s='+ t : '&s=all')
            .concat(y ? '&y=' + y : '&y=all')
            .concat(type ? '&type=' + type : ''))

            .then(respose => respose.json())
            .then(data => { 
                    setLoading(false);
                    setCardList(data.Search);
                })
            .catch((err) => {
                console.log(err);
                setLoading(false); 
            })
    }

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=all&y=all`)
            .then(respose => respose.json())
            .then(data => {
                setLoading(false);
                setCardList(data.Search);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err); 
            })
    }, [])

    return <main className='container content'>
        <Search 
            setSearch = {updateSearch}
        />
        {
            loading ? (
                <Preloader />
            ) : (
                <CardList cardList={cardList} />
            )        
        }
    </main>
}

export { Main }