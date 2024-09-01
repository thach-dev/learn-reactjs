import { useState } from "react";

function App() {
  /*
  const orders = [
    100,200,300
  ]
  
  //useState thay đổi giao diện khi dữ liệu thay đổi
  const [couter, setCouter] = useState(() => {
    return orders.reduce((total, order) => total + order, 0);
  });

  const handleIncrease = () => {
    setCouter(prevState => prevState + 1);
  };
  const handleReduce = () => {
    setCouter(prevState => prevState - 1);
  };
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h1>{couter}</h1>
      <button   onClick={handleIncrease}>Increase</button>
      <button   onClick={handleReduce}>Reduce</button>
    </div>
  );
  */
  /*bai tap*/
  // random gifts
  // const gifts = [
  //   'iPhone 12',
  //   'iPhone 13',
  //   'iPhone 14'
  // ] 

  // const [gift, setGift] = useState('')

  // const handleGift = () => {
  //   setGift(gifts[Math.floor(Math.random() * gifts.length)]);
  // }
  // return (
  //     <>
  //       <div>
  //         <h1>{gift || 'chưa có thưởng'}</h1>
  //         <button onClick={handleGift}>Click</button>
  //       </div>      
  //     </>
  // )
  // two way binding
  // response api 
  /*
  const courses = [
    {
      id: 1,
      name: 'HTML, CSS'
    },
    {
      id: 2,
      name: 'Javascript'
    },
    {
      id: 3,
      name: 'ReactJS'
    }
  ]
  
  const [checked, setChecked] = useState([]);
  
  const handleChecked = (id) => {
    setChecked(pre => {
      if(pre.includes(id)) {
        return pre.filter(item => item !== id);
      }
      return [...pre, id];
    });
    console.log(checked);
    
  }
  const handleSumbit = () => {
    console.log({ids : checked});
  }
  return (
      <>
        <h1>Register</h1>
        {courses.map(course => (
          <div key={course.id}>
            <input 
              type="checkbox" 
              checked={checked.includes(course.id)}
              onChange={() => handleChecked(course.id)} 
            />
            <label>{course.name}</label>
          </div>
        ))}
        <button onClick={handleSumbit}>Submit</button>
      </>
  )
  */
  // todo list
  const [listed, setListed] = useState([]);
  const handleAdd = () => {
    const newValue = document.querySelector('input').value;
    setListed(pre => {
      return [...pre, {id: new Date().getTime(), value: newValue}]
    })
    document.querySelector('input').value = '';
  }
  const handleDelete = (id) => {
    setListed(pre => pre.filter(item => item.id !== id));
    
  }
  console.log(listed);
  return (
    <>
      <h1>To do list</h1>
      <div>
        <input type="text" placeholder="Nhập danh sách của bạn" />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul>
        { listed.map(item => 
          <li key={item.id}>
            <span style={{marginRight: '10px'}}>{ item.value || 'Chưa có lịch vui lòng thêm'}</span>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>)
        }
      </ul>
    </>
  )

}

export default App;
