import '../../styles/Testimonials/ListItem.css';

const ListItem = props => {
  return (
    <div className="listItem">
      <div className="listItem__img">
        <img alt={`headshot of comment contributor ${props.name}`} src={props.imageUrl} />
      </div>
      <div className="listItem__comments">
        {props.comment}
        <div className="userInfo">
          <span>{props.name}, {props.age}</span> <br/>
          <span>{props.location}</span>
        </div>
      </div>
    </div>
  )
}

export default ListItem;