import logo from './logo.svg';
import './App.css';  
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
//게시판 crud



function Create({title,body,onChange,onCreate}){
    return (
        <>
            <p><input type="text" name="title" placeholder='title' value={title} onChange={onChange} onCreate={onCreate}/></p>
            <p><textarea name="body" value={body} onChange={onChange} onCreate={onCreate}>body</textarea></p>
            <p><button onClick={()=>{onCreate(uuidv4())}}>작성</button></p>
        </>
    )
}


function App() {
  const [posts,setPosts]=useState([
    {id:1,title:'게시판',body:'감사합니다'},
    {id:2,title:'호서대',body:'9월1일 개강'},
    {id:3,title:'안녕',body:'나는 프론트엔드 개발자야'}
  ]);
  const [inputs, setInputs]=useState({
    title:"",
    body:""
  });
  const {title,body}=inputs;
  const onChange=(e)=>{
    const {name, value}=e.target;
    setInputs({...inputs, [name]:value});
  };
  const onCreate=(id)=>{
    const post={
      id,
      title,
      body
    };
    setPosts(post);
    setInputs({title:"",body:""});
  }
  return (
    <>
      <h2>게시판</h2>
      <a href="/create">글 쓰기</a>
    </>
  );
}

export default App;
