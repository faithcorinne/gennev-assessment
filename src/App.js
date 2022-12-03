import './App.css';
import TestimonialForm from './components/SubmissionForm/TestimonialForm';
import TestimonialList from './components/Testimonials/TestimonialList';

export default function App() {
  return (
    <div>
      <h1>Gennev Community Page</h1>
      <div className='container'>
        <TestimonialForm />
        <TestimonialList />
      </div>
    </div>
  );
}
