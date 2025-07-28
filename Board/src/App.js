import logo from './logo.svg';
import './App.css';  
import { useState, useEffect, useRef } from 'react';
//게시판 crud

function Header(){
  return <div>
    <h1>게시판</h1>
  </div>;
}

function Post(props){
  return <div className='box'>
      <h3>{props.title}</h3>
      {props.body}
    </div>;
}


function Create(props){
  return (
    <>
        <p><input type="text" name="title" placeholder='제목' /></p>
        <p><textarea name="body" placeholder='본문'></textarea></p>
        <p><button onClick={(e)=>{
          const title=e.target.value.title;
          const body=e.target.value.body;
          props.onCreate(title,body);
          window.location.href='/';
        }}>글 추가</button></p>
    </>
  )
}



function App(){
  const [mode, setMode]=useState('HOME');
  const [nextId, setNextId]=useState(4);
  const [posts,setPosts]=useState([
    {id:1, title:'안녕하세요', body:'저는 프론트엔드 개발자입니다.'},
    {id:2, title:'안녕하십니까', body:'저는 백엔드 개발자입니다.'},
    {id:3, title:'반갑습니다', body:'저는 UX디자이너입니다.'},
  ]);
  let content=null;
  if(mode === 'HOME'){
    content=posts.map(item=>(
        <div key={item.id}>
          <Post title={item.title} body={item.body}></Post>
        </div>
      ));
  } else if(mode === 'CREATE'){
    content=<Create onCreate={(_title, _body)=>{
      const newPost=[{id:nextId, title:_title, body:_body}];
      const newPosts=[...posts];
      newPosts.push(newPost);
      setPosts(newPosts);
      setNextId(nextId+1);
      setMode('HOME');
    }} />;
  }
  return (
    <>
      <Header></Header>
      {content}
      <div>
        <input 
          type="button" 
          value="글 추가" 
          onClick={(e)=>{
            setMode('CREATE');
          }}  
        />
        <input type="button" value="글 삭제" />
    </div>
    </>
  );
}

export default App;
