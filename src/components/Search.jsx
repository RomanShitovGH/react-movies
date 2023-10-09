import React, {useState} from "react";

const Search = (props) => {
    const {
        setSearch = Function.prototype,
    } = props;

    const [searchTitle, setSearchTitle] = useState('');
    const [searchYear, setSearchYear] = useState('');
    const [searchType, setSearchType] = useState('');

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            setSearch(searchTitle, searchYear, searchType);
        }
    }

    const onRadioChange = (e) => {
        setSearchType(e.target.value);
        setSearch(searchTitle, searchYear, e.target.value);
    }

        return  <div onKeyDown={onKeyDown}> 
                    <div className="input-field">
                        <input 
                            className="validate" 
                            type="search" 
                            placeholder="Поиск по названию"
                            value={searchTitle}
                            onChange={(e) => (setSearchTitle(e.target.value))} 
                        />
                    </div> 
                    <div className="input-field">
                        <div className="row row-search">
                            <input 
                                className="validate"
                                type="search" 
                                placeholder="Поиск по году"
                                value={searchYear}
                                onChange={(e) => (setSearchYear(e.target.value))} 
                            />
                            <a 
                                className="icon-preview right"
                                onClick={() => setSearch(searchTitle, searchYear, searchType)}
                            >
                                <i className="medium material-icons dp32 icon-search ">search</i>
                            </a>
                        </div>      
                    </div> 
                    <div className="radioFilter">
                        <p>
                            <label className="radioItem">
                                <input name="searchType" type="radio" defaultChecked value="" onChange={(e) => onRadioChange(e)}/>
                                <span>Все</span>
                            </label>
                        </p>
                        <p>
                            <label className="radioItem">
                                <input name="searchType" type="radio" value="movie" onChange={(e) => onRadioChange(e)}/>
                                <span>Фильмы</span>
                            </label>
                        </p>
                        <p>
                            <label className="radioItem">
                                <input name="searchType" type="radio" value="series" onChange={(e) => onRadioChange(e)}/>
                                <span>Сериалы</span>
                            </label>
                        </p>
                    </div>
                </div>   
    }

    export { Search };