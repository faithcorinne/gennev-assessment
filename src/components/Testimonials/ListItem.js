import '../../styles/Testimonials/ListItem.css';

const ListItem = props => {
  return (
    <div className="listItem">
      <div className="listItem__img">{props.imageUrl}</div>
      <div className="listItem__comments">
      {props.comment}
      </div>
      <div className="userInfo">
        <span>{props.name}, {props.age}</span> <br/>
        <span>{props.location}</span>
      </div>
    </div>
  )
}

export default ListItem;