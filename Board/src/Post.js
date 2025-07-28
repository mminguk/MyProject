function Content({post}){
  return (
    <div className='box'>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </div>
  );
}