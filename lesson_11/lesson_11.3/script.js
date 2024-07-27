// сделал из картинок масив
const images =  ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"];
// с помощью math рандомно выбираеться картинка 
// random -  может и выдать доробовые числа(а индекс не может быть дробовым)
// поэтому используем floor
const randomImageIndex = Math.floor(Math.random() * images.length);
// показываем какая картинка выпала
const randomImage = images[randomImageIndex];
// путь к картинке для  src, хотя можно бы было это не писать а сразу в строке 12
// написать src="images/${randomImage}"
const imagePath = `images/${randomImage}`;


document.body.innerHTML = `<img src="${imagePath}" alt="Random Image">`;

