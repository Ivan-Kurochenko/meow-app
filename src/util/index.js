export const sendMessage = (message) => {
    fetch('https://meow-app-backend.onrender.com/what-she-said',
        {method: 'POST', body: JSON.stringify(message)})
}
