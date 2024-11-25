const birth = prompt(`Please, enter your year of birth`);
const nowYear = 2024;
let age;
switch(birth) {
    default:
        age = `You are ${nowYear - birth} years old. `;
        break;
    case null:
        age = 'your birth year';
        break;
};
const liveCity = prompt(`Which city you live in?`);
let messageLiveCity;
switch(liveCity) {
    case 'Kyiv': 
        messageLiveCity = 'You live in the capital of Ukraine';
        break;
    case 'Washington': 
        messageLiveCity = 'You live in the capital of USA';
        break;
    case 'London': 
        messageLiveCity = 'You live in the capital of Great Britain';
        break;
    default:
        messageLiveCity = `You live in the city ${liveCity}.`;
        break;
    case null:
        messageLiveCity = `your city`;
        break;
};
const favoriteSport = prompt(`What are you favorite sport?`);
let messageFavoriteSport;
switch(favoriteSport){
    case 'football' || "Football":
        messageFavoriteSport = 'Cool! Do you want to become Lionel Messi?';
        break;
    case 'volleyball' || "Volleyball":
        messageFavoriteSport = 'Cool! Do you want to become Bruno Rezende?';
        break;
    case 'basketball' || "Basketball":
        messageFavoriteSport = 'Cool! Do you want to become LeBron James?';
        break;
    default:
        messageFavoriteSport = `Your favourite sport is ${favoriteSport}.`;
        break;
    case null:
        messageFavoriteSport = 'your favorite sport';
        break;

};
let windowMessage;
switch(windowMessage){
    case null:
        alert(`Too bad you didn't want to enter ${age} ${messageLiveCity} ${messageFavoriteSport}.`);
        break;
    case undefined:
        alert(`Too bad you didn't want to enter ${age}, ${messageLiveCity} and ${messageFavoriteSport}.`);
        break;
    default:
        alert(`${age} ${messageLiveCity} ${messageFavoriteSport}`);
        break;
};