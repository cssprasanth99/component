import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import InputEvent from './components/subscribingExternalEvents';
import DynamicDocumentTitle from './components/DynamicDocumentTitle';


function App() {
    const [data,setData] = useState([]);
    const [click,setClick] = useState(false);
    const [count,setCount] = useState(0);
    const [showTitle, setShowTitle] = useState(true);

    useEffect(()=>{
      setClick(!click);
      fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => console.log("Error in fetching data"));
    },[]);

    return (
      <>
      <div>
      <h1>Component Lifecycle, Side Effects and useEffect Hook
</h1>
      {showTitle && <DynamicDocumentTitle title={`Count: ${count}`} />}
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <br/>
      <button onClick={() => setShowTitle(false)}>Unmount DynamicDocumentTitle</button>
      <br/>
      <button onClick={()=>setClick(!click)}>{click ? "Show All data":"Go Back"}</button>
      <br/>
        {click ? <InputEvent/> :
        data.map((post) => (
              <div key={post.id}>
                <p>Id:{post.id}</p>
                <p>Title:{post.title}</p>
                <p>Body :{post.body}</p>
              </div>
            ))}
      </div>
      </>
    )
}

export default App;
