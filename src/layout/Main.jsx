import React from "react"
import CardList from "../components/CardList"
import Preloader from "../components/Preloader"
import Search from "../components/Search"

const API_KEY = process.env.REACT_APP_API_KEY

export default class Main extends React.Component {
    state = {
        cardList: [],
        valueTitle: '&s=all',
        valueYear: '&y=all',
        valueType: '',
        loading: true,
    }

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&` + this.state.valueTitle + this.state.valueYear)
            .then(respose => respose.json())
            .then(data => this.setState({
                cardList: data.Search,
                loading: false,
            }))
    }
    
    fetchBD() {
        this.setState({loading: true});
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}`
            .concat(this.state.valueTitle ? '&s='+ this.state.valueTitle : '&s=all')
            .concat(this.state.valueYear ? '&y=' + this.state.valueYear : '&y=all')
            .concat(this.state.valueType ? '&type=' + this.state.valueType : ''))

            .then(respose => respose.json())
            .then(data => (data.Response === 'True') ? 
                this.setState({
                    cardList: data.Search,
                    loading: false,
                }) : 
                this.setState({
                    cardList: [],
                    loading: false,
                }))
            .catch(() => {
                this.setState({
                    loading: true,
                })
            })
    }
    
    updateSearch = (t, y, type) => {
        if (t !== this.state.valueTitle) {
            this.setState({valueTitle: t}, () => {
                this.fetchBD(); 
            })
        }    
        if (y !== this.state.valueYear) {
            this.setState({valueYear: y}, () => {
                this.fetchBD(); 
            })
        }
        if (type !== this.state.valueType) {
            this.setState({valueType: type}, () => {
                this.fetchBD(); 
            })
        }       
    }

    render() {
        const {cardList, loading} = this.state

        return <main className='container content'>
            <Search 
                setSearch = {this.updateSearch}
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
}