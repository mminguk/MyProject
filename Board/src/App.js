import logo from './logo.svg';
import './App.css';
import Header from './components/Header';  
import Post from './components/Post';
import Article from './components/Article';
import { useState } from 'react';

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
  const [title,setTitle]=useState(props.title);
  const [body,setbody]=useState(props.body);
  return (
    <form onSubmit={(event)=>{
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onUpdate(title, body);
    }}>
        <p><input type="text" name="title" placeholder='제목' value={title} onChange={(event)=>{
          setTitle(event.target.value);
        }} /></p>
        <p><textarea name="body" placeholder='본문' value={body} onChange={(event)=>{
          setbody(event.target.body);
        }}></textarea></p>
        <p><input type="submit" value="글 수정" /></p>
    </form>
  );
}


function App(){
  const [mode, setMode]=useState('HOME');
  const [nextId, setNextId]=useState(4);
  const [id, setId]=useState(null);
  const [posts,setPosts]=useState([
    {id:1, title:'안녕하세요', body:'저는 프론트엔드 개발자입니다.'},
    {id:2, title:'안녕하십니까', body:'저는 백엔드 개발자입니다.'},
    {id:3, title:'반갑습니다', body:'저는 UX디자이너입니다.'},
  ]);
  let content=null;
  let controlcontext=null;
  if(mode==='HOME'){
    content=<Post posts={posts} onChangeMode={(_id)=>{
      setMode('READ');
      setId(_id);
    }} />;
    controlcontext=<div>
        <input 
          type="button" 
          value="글 생성" 
          onClick={(e)=>{
            setMode('CREATE');
          }}  
        />
      </div>;
  }
  else if(mode === 'READ'){
    let title, body=null;
    for(let i=0;i<posts.length;i++){
      if(posts[i].id === id){
        title=posts[i].title;
        body=posts[i].body;
      }
    }
    content=<Article title={title} body={body} />;
    controlcontext=<div>
        <input type="button" value="글 수정" onClick={()=>{
          setMode('UPDATE');
        }} />
        <input type="button" value="글 목록" onClick={()=>{
          setMode('HOME');
        }} />
        <input type="button" value="글 삭제" onClick={()=>{
          if(window.confirm('삭제하시겠습니까?')){
            const newPosts=[];
          for(let i=0;i<posts.length;i++){
            if(posts[i].id !== id){
              newPosts.push(posts[i]);
            }
          }
          window.alert('성공적으로 처리되었습니다');
          setPosts(newPosts);
          setMode('HOME');
          }else{
            window.alert('취소되었습니다.');
          }
        }}/>
      </div>;
  }else if(mode === 'CREATE'){
    content=<Create onCreate={(_title, _body)=>{
      const newPost={id:nextId, title:_title, body:_body};
      const newPosts=[...posts];
      newPosts.push(newPost);
      setPosts(newPosts);
      setId(nextId);
      setNextId(nextId+1);
      setMode('READ');
    }} />;
  } else if(mode === 'UPDATE'){
    let title, body=null;
    for(let i=0;i<posts.length;i++){
      if(posts[i].id === id){
        title=posts[i].title;
        body=posts[i].body;
      }
    }
    content=<Update title={title} body={body} onUpdate={(title,body)=>{
      const UpdatePost={id:id, title:title, body:body};
      const UpdatePosts=[...posts];
      for(let i=0;i<UpdatePosts.length;i++){
        if(UpdatePosts[i].id===id){
          UpdatePosts[i]=UpdatePost;
          break;
        }
      }
      setPosts(UpdatePosts);
      setMode('READ');
    }}></Update>;
  } 
  return (
    <>
      <Header></Header>
      {content}
      {controlcontext}
    </>
  );
}

export default App;
