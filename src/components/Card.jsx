export default function Card(props) {
    let badgeText
        if (props.openSpots === 0) {
            badgeText = "SOLD OUT"
        } else if (props.location === "Online") {
            badgeText = "ONLINE"
        }
    
    return (
      <div className="card">
        {badgeText !== 0 && <div className='card--badge'>{badgeText}</div>}
        <img src={require(`../assets/${props.coverImg}`)}
        className="card--image"
        alt="card"/>
        <div className="card--stats">
            <img src={require('../assets/star.png')}
            className="card--star"
            alt='star'/>
            <span>{props.stats.rating}</span>
            <span className="gray">({props.stats.reviewCount}) •&nbsp;</span>
            <span className="gray">{props.location}</span>
        </div>
        <p className="card--title">{props.title}</p>
        <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
    </div>
    );
}