export default function Card(props) {
    return  <div className="card">
                <div className="card-image">
                    {props.poster === 'N/A' ? (
                        <img className="activator"
                             src={`https://via.placeholder.com/300x400?text=${props.title}`}
                        />
                    ) : ( 
                          <img src={props.poster} />
                    )}        
                </div>
                <div className="card-content">
                    <span className="card-title">{props.title}, {props.year}</span> 
                    <p>Тип: {props.type}</p>
                </div>
                <div className="card-action">
                    <a href="#">Подробней</a>
                </div>
            </div>
                
}