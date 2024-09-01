import { useState } from "react";
import ToDoList from "./components/ToDoList";
import Content from "./components/Content";
function App() {
  const [show, setShow] = useState(false)
  return (
    <>
      
     
      
      {/* 
        LifeCycle Mounted & Unmounted 
        Mounted là thời điểm bạn đưa component vào thời điểm sử dụng
        Unmounted là thời điểm gỡ nó ra
      */}
      {
        show && <ToDoList/>
      }
      <button onClick={() => setShow(!show)}>Bài  tập To Do List</button>
    </>
  )

}

export default App;
