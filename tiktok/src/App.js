import { useState } from "react";
import Content from "./components/Content";
// import ToDoList from "./components/ToDoList";
// khi nào dùng useEffect khi các muốn thực hiện Side Effect thì dùng useEffect
/*
  1.Update Dom
  2.Call API
  3.Listen Dom Event
  4.Cleanup
*/
function App() {
  
  //1 useEffect(callback)
  //- Gọi callback mỗi khi component rerender
  //- Gọi callback sau khi component thêm element vào DOM
  //2 useEffect(callback, [])
  //3 useEffect(callback, [deps])
  // - Callback sẽ được gọi lại mỗi khi khi deps thay đổi
  // _____________________
  //1. Callback luôn được gọi sau khi component mounted
  const [show, setShow] = useState(false);
  return (
    
    <>
      {/* 
        LifeCycle Mounted & Unmounted 
        Mounted là thời điểm bạn đưa component vào thời điểm sử dụng
        Unmounted là thời điểm gỡ nó ra
      */}
      {/* {
        show && <ToDoList/>
      }
      <button onClick={() => setShow(!show)}>Bài  tập To Do List</button>
       */}
      
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content/>}

     

    </>
  )

}

export default App;
