const block = document.getElementById("block");

block.addEventListener('click',(e) => {
    if(e.target.tagName === "BUTTON"){
        alert(`You clicked on: ${e.target.textContent}`);
    }
})
