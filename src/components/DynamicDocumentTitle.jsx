import {useEffect} from "react";

function DynamicDocumentTitle({title}){
    useEffect(()=>{
        document.title = title;

        return ()=>{
            document.title = "React App";
        }
    },[title]);
}

export default DynamicDocumentTitle;