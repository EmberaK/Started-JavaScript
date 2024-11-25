function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function delayedLog() {
    try {
        await delay(3000); // Ждём 3 секунды
        console.log('Таймер завершён');
    } catch (error) {
        console.log('Таймер не завершен, та виникла помилка');
    }
}

delayedLog(); // Вызываем функцию без скобок
