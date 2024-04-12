import { useState, useEffect } from "react";

function InputEvent(){

    const [searchData,setSearchdata] = useState("");
    const [id, setId] = useState();

    useEffect(() => {
        if (id) {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setSearchdata(data);
            })
            .catch((error) => console.log("Error in fetching data"));
        }
    }, [id]); // Run the effect whenever `id` changes

    return (
        <div>
        <input 
            type="text" 
            placeholder="Enter Id number" 
            onChange={(e)=> setId(e.target.value)}
            value={id}
        />
        <p>Id: {searchData.id}</p>
        <p>Title: {searchData.title}</p>
        <p>Body: {searchData.body}</p>
        </div>
    );
}

export default InputEvent;
