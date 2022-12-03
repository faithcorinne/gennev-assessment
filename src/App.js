import { useEffect, useState } from 'react';
import './App.css';
import TestimonialForm from './components/SubmissionForm/TestimonialForm';
import TestimonialList from './components/Testimonials/TestimonialList';
import raw from './data/sample-data.txt.txt';

export default function App() {

  const[loading,setIsLoading] = useState(false);
  const [posts,setPosts] = useState([]);
  
  useEffect(() => {
    const getDefaultPosts = async () => {
      setIsLoading(true);
      let textDump = await fetch(raw).then(response => response.text());
      textDump = textDump.split('Name').filter((item) => item.length > 0);
      let newThing = textDump.map((item, index) => {
        let splitItem = item.split('\n');

        let newTestimonial = {
          id: index+1,
          name: null,
          age: null,
          location: null,
          comments: null,
          imageUrl: null
        };

        const name = splitItem[0];
        const age = splitItem[1];
        const location = splitItem[2];
        const comments = splitItem[3];
        let imageUrl = splitItem[4];
        imageUrl = imageUrl.split(' ');

        newTestimonial.name = name.substring(name.indexOf(' ') + 1).trim();
        newTestimonial.age = age.substring(age.indexOf(' ') + 1).trim();
        newTestimonial.location = location.substring(location.indexOf(' ') + 1).trim();
        newTestimonial.comments = comments.substring(comments.indexOf(':') + 1).trim();
        newTestimonial.imageUrl = imageUrl[1];

        return newTestimonial;
      });

      setPosts([...newThing]);
      setIsLoading(false);
    }

    getDefaultPosts();

  }, []);

  return (
    <div>
      <h1>Gennev Community Page</h1>
      <div className='container'>
        <TestimonialForm />
        {
          loading ? <h4>Still loading, please wait...</h4> 
          : <TestimonialList comments={posts} />
        }
      </div>
    </div>
  );
}
