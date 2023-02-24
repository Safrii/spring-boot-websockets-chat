var stompClient = null

function connect() {
    var socket = new SockJS('/gs-guide-websocket');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/app', function () {
            console.log("subscribed to chat")
        });
    });
}

function sendMessage(user, message) {
    stompClient.send("app/send", {}, JSON.stringify({ 'message': message }))
    showMessages(user, message)
}

function showMessages(user, message) {
    var completeMessage = `${user} --> ${message}`
    var node = document.createElement('li')
    node.appendChild(document.createTextNode(completeMessage))
    document.getElementById("chat").appendChild(node)
}

connect()
