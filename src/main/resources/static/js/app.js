var stompClient = null

function connect() {
    var socket = new SockJS('/chat');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/messages', function (messageOutput) {
            console.log("u callbacku sam")
            showMessages("test", JSON.parse(messageOutput))
        });
    });
}

function sendMessage(user, message) {
    stompClient.send("app/chat", {}, JSON.stringify({ 'message': message }))
    
}

function showMessages(user, message) {
    var completeMessage = `${user} --> ${message}`
    var node = document.createElement('li')
    node.appendChild(document.createTextNode(completeMessage))
    document.getElementById("chat").appendChild(node)
}

connect()
