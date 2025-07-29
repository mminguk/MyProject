import logo from './logo.svg';
import './App.css';  
import { useState } from 'react';
//게시판 crud

function Header(){
  return <div>
    <h1>게시판</h1>
  </div>;
}

function Post(props){
  const notices=[];
  console.log(props.posts.length);
  for(let i=0;i<props.posts.length;i++){
    let t=props.posts[i];
    notices.push(
    <li key={t.id}>
      <a href={"/read/"+t.id} onClick={(event)=>{
            event.preventDefault();
            props.onChangeMode(Number(event.target.id));
          }}>
            <h3>{t.title}</h3>
            {t.body}
      </a>
    </li>
    );
  }
  return (
    <ul>
      {notices}
    </ul>
  );
}

function Article(props){
  return (
    <div>
      <h2>{props.title}</h2>
      {props.body}
    </div>
  );
}


function Create(props){
  return (
    <form onSubmit={(event)=>{
      event.preventDefault();
      const title=event.target.title.value;
      const body=event.target.body.value;
      props.onCreate(title, body);
    }}>
        <p><input type="text" name="title" placeholder='제목' /></p>
        <p><textarea name="body" placeholder='본문'></textarea></p>
        <p><input type="submit" value="글 생성" /></p>
    </form>
  )
}

function Update(props){
  return (
    <form onSubmit={(event)=>{
      event.preventDefault();
      const title=event.target.title.value;
      const body=event.target.body.value;
      props.onUpdate(title, body);
    }}>
        <p><input type="text" name="title" placeholder='제목' /></p>
        <p><textarea name="body" placeholder='본문'></textarea></p>
        <p><input type="submit" value="글 생성" /></p>
    </form>
  );
}

function App(){
  const [mode, setMode]=useState('HOME');
  const [id,setId]=useState(null);
  const [nextId, setNextId]=useState(4);
  const [posts,setPosts]=useState([
    {id:1, title:'안녕하세요', body:'저는 프론트엔드 개발자입니다.'},
    {id:2, title:'안녕하십니까', body:'저는 백엔드 개발자입니다.'},
    {id:3, title:'반갑습니다', body:'저는 UX디자이너입니다.'},
  ]);
  let content=null;
  if(mode === 'READ'){
    let title, body=null;
    for(let i=0;i<posts.length;i++){
      if(posts[i].id === id){
        title=posts[i].title;
        body=posts[i].body;
      }
    }
    content=<Article title={title} body={body}></Article>;
  }else if(mode === 'CREATE'){
    content=<Create onCreate={(_title, _body)=>{
      const newPost={id:nextId, title:_title, body:_body};
      const newPosts=[...posts];
      newPosts.push(newPost);
      setPosts(newPosts);
      setNextId(nextId+1);
      setMode('HOME');
    }} />;
  } else if(mode === 'UPDATE'){
    content=<Update></Update>;
  }
  return (
    <>
      <Header></Header>
      {posts.map(item=>
      <div key={item.id}>
        <Post title={item.title} body={item.body} posts={posts}></Post>
      </div>)}
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
