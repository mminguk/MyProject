export default function Post(props){
  const notices=[];
  for(let i=0;i<props.posts.length;i++){
    let t=props.posts[i];
    notices.push(
    <li key={t.id}>
      <a href={`/read/${t.id}`} onClick={(event)=>{
            event.preventDefault();
            props.onChangeMode(t.id);
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