import React, { useState, useEffect } from 'react';

const tabs = ['posts', 'comments', 'albums' , 'photos', 'users', 'todos'];

function Content() {
  const [title, setTitle] = useState('');
  const [post, setPost] = useState([]);
  const [type, setType] = useState('posts');
  const [showGoToTop, setShowGoToTop] = useState(false);
  
  useEffect(() => {
    console.log('type changed');
    
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        console.log('Posts fetched:', posts);
        setPost(posts);
      })
  }, [type]);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setShowGoToTop(true);
      }else{
        setShowGoToTop(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }  
  },[]);
  
  return (
    <div>
      {tabs.map(tab => (
        <button 
          key={tab}
          style={type === tab ? 
            {color: 'red', fontWeight: 'bold', backgroundColor: 'black'} :
            {}
          }
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {post.map(post => (
          <li key={post.id}>
            {post.title || post.name}
          </li>
        ))}
      </ul>
      {showGoToTop && 
        <button
          style={{position: 'fixed', right: '10px', bottom: '10px'}} 
          onClick={() => window.scrollTo(0, 0)}
        >
            Go To Top
        </button>
      }
    </div>
  );
}
export default Content;