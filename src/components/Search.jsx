import React, {useEffect} from "react";

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTitle: '',
            searchYear: '',
            searchType: '',
        };
    }

    updSearch = () => {
        this.props.setSearch(this.state.searchTitle, this.state.searchYear, this.state.searchType);
    }

    onKeyDown = (e) => {
        if (e.keyCode === 13) {
            this.updSearch();
        }
    }

    onRadioChange = (e) => {
        this.setState({[e.target.name]: e.target.value}, () => {
            this.updSearch();
        })
    }

    render() {
        return  <div onKeyDown={this.onKeyDown}> 
                    <div className="input-field">
                        <input 
                            className="validate" 
                            type="search" 
                            placeholder="Поиск по названию"
                            value={this.state.searchTitle}
                            onChange={(e) => (this.setState({searchTitle: e.target.value}))} 
                        />
                    </div> 
                    <div className="input-field">
                        <div className="row row-search">
                            <input 
                                className="validate"
                                type="search" 
                                placeholder="Поиск по году"
                                value={this.state.searchYear}
                                onChange={(e) => (this.setState({searchYear: e.target.value}))} 
                            />
                            <a 
                                className="icon-preview right"
                                onClick={this.updSearch}
                            >
                                <i className="medium material-icons dp32 icon-search ">search</i>
                            </a>
                        </div>      
                    </div> 
                    <div className="radioFilter">
                        <p>
                            <label className="radioItem">
                                <input name="searchType" type="radio" defaultChecked value="" onChange={(e) => this.onRadioChange(e)}/>
                                <span>Все</span>
                            </label>
                        </p>
                        <p>
                            <label className="radioItem">
                                <input name="searchType" type="radio" value="movie" onChange={(e) => this.onRadioChange(e)}/>
                                <span>Фильмы</span>
                            </label>
                        </p>
                        <p>
                            <label className="radioItem">
                                <input name="searchType" type="radio" value="series" onChange={(e) => this.onRadioChange(e)}/>
                                <span>Сериалы</span>
                            </label>
                        </p>
                    </div>
                </div>   
    }
}