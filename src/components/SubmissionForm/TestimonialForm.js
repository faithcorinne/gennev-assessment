import '../../styles/SubmissionForm/TestimonialForm.css';

const TestimonialForm = props => {
  return (
      <div className="submissionForm">
        <h3>Add Your Voice</h3>
        <div className="inputFields">
          <input id="name" type="text" placeholder="Full Name" />
          <input id="location" type="text" placeholder="Location" />
          <input id="age" type="text" placeholder="Age" />
          <input id="comments" type="textField" placeholder="Share something with the community" />
          <input id="submit" type="submit" />
        </div>
      </div>
  )
}

export default TestimonialForm;