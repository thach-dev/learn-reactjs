import React, { useState, useEffect } from 'react';

const tabs = ['posts', 'comments', 'albums' , 'photos', 'users', 'todos'];

function Content() {
  const [title, setTitle] = useState('');
  const [post, setPost] = useState([]);
  const [type, setType] = useState('posts');
  
  useEffect(() => {
    console.log('type changed');
    
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        console.log('Posts fetched:', posts);
        setPost(posts);
      })
  }, [type]);
  
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
    </div>
  );
}
export default Content;