function ChangeColor(){
    let colors=['red', 'green', 'black', 'blue', 
    'powderblue', 'pink', 'tomato', 'gray',
    'lightblue','cyan','darkblue', 'white'
    ];
    let button=document.querySelector('button');
    let container=document.getElementById('container');
    button.addEventListener('click', function(){
        container.style.backgroundColor=colors[Math.floor(Math.random()*(colors.length-1))];
    })
}