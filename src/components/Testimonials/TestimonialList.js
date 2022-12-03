import ListItem from './ListItem';
import '../../styles/Testimonials/TestimonialList.css';

const TestimonialList = props => {
  return (
    <div className="listView">
      <div className="viewToggle">
        <button disabled>Grid</button>
        <button>List</button>
      </div>
      <div className="listItems">
        {
          props.comments.map((comment) => {
            return <ListItem key={comment.id} name={comment.name} age={comment.age} location={comment.location} comment={comment.comments} imageUrl={comment.imageUrl} />
          })
        }
        
      </div>
    </div>
  )
}

export default TestimonialList;