function tablePythagorean(size){
    const table = document.getElementById("table");
    for(let i = 0; i <= size; i++){
        const row = table.insertRow();
        for(let j = 0; j <= size; j++){
            const cell = row.insertCell();
            if(i === 0 && j === 0){
                cell.innerHTML = '';
            } else
            if(i === 0){
                cell.innerHTML = j;
            } else
            if(j === 0){
                cell.innerHTML = i;
            }
            else{
                cell.innerHTML = i*j;
            }
        }
    }
}
tablePythagorean(10);