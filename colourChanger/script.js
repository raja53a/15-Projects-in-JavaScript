const btn = document.querySelectorAll('.button');
const h1 = document.querySelector('h1');
const body = document.querySelector('body');

btn.forEach((button) => {
    console.log(button);
    button.addEventListener('click',(e)=>{
        console.log(e);
        let color = e.target.id;
        if(color === 'grey'){
            body.style.backgroundColor = color;
            h1.style.color = "pink";
        }
        if(color === 'white'){
            body.style.backgroundColor = color;
            h1.style.color = "red";
        }
        if(color === 'blue'){
            body.style.backgroundColor = color;
            h1.style.color = "yellow";
        }
        if(color === 'yellow'){
            body.style.backgroundColor = color;
            h1.style.color = "blue";
        }
    });
});
