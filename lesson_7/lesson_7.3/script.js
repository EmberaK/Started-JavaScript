function boxInput(){
    let inputUser;
    for(let i = 0; i <=10; i++){
        inputUser = prompt(`Please enter a number greater than 100`);
        const againInputUser = inputUser;
        if (Number(inputUser)>100 || String(inputUser)){
            alert(`Result, last information: ${inputUser}`);
        }
        if (Number(inputUser)<100){
            alert(`Please enter a number greater than 100`);
            againInputUser;
        }
    }
    
}
boxInput();