export const sendMessage = (message) => {
    fetch('https://clicking-report-bot.onrender.com/what-she-said',
        {method: 'POST', body: JSON.stringify(message)})
}
