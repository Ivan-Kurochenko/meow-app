export const sendMessage = (message) => {
    fetch('https://clicking-report-bot.onrender.com/report',
        {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({message})
        })
}
