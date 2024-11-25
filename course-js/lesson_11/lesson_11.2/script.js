const block = document.querySelector("#block");
const button = block.querySelector("#button");
const paragraph = block.querySelector("#text");
let changedColor = false;

button.addEventListener('click', () => {
    if(changedColor){
        paragraph.style.color = 'black'
        paragraph.style.backgroundColor = 'white';
    } else{
        paragraph.style.color = 'purple';
        paragraph.style.backgroundColor = 'black';
    }
    changedColor = !changedColor;
})