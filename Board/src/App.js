import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
//게시판 crud

function Content(){
  return (
    <>
      <div id="contents">
        <img src="https://picsum.photos/60/60" alt="human"/>
        <div>
          <h3><a href="#">게시판 이용 규칙</a></h3> 
        </div>
      </div>
    </>
  );
}

function Create(){
  return (
    <form onSubmit={(event)=>{
    event.preventDefault();
  }}>
      <p>
        <label for="title">제목 : </label>
        <input type="text" name="title" id="title" />
      </p>
      <p>
        <label for="desc">내용 : </label>
        <textarea name="desc" id="desc"></textarea>
      </p>
      <p>
        <input type="submit" value="글 추가" />
      </p>
    </form>


  )
}

function App() {
  return (
    <>
      <div id="header"><h2>게시판</h2></div>
      <Content></Content>
      <ul>
        <li><a href="/create">글 추가</a></li>
      </ul>
    </>
  );
}

export default App;
