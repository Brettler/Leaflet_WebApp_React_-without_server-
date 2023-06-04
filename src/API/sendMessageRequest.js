async function sendMessageRequest(chatId, msg) {
    // get token from local storage
    const userToken = localStorage.getItem('token');

    const response = await fetch(`http://localhost:5000/api/Chats/${chatId}/Messages`, {
        'method': 'post',
        'headers': {
            'Content-Type': 'application/json',
            "authorization": 'Bearer ' + userToken,
        },
        'body': JSON.stringify({ msg: msg })
    });

    if (response.ok) {
        const message = await response.json();
        console.log("Respond from the server after sending the message: ", message)

        return message;
    } else {
        throw new Error('Failed to send message');
    }
}
export default sendMessageRequest;