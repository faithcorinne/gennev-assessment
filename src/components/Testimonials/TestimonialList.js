import ListItem from './ListItem';
import '../../styles/Testimonials/TestimonialList.css';

const TestimonialList = props => {
  return (
    <div className="listView">
      <div className="viewToggle">
        <button>Grid</button>
        <button>List</button>
      </div>
      <div className="listItems">
        <ListItem />
      </div>
    </div>
  )
}

export default TestimonialList;