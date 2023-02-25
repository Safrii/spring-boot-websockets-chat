var stompClient = null

function connect() {
    var socket = new SockJS('/chat');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/messages', function (messageOutput) {
            showMessageOutput(JSON.parse(messageOutput.body));
        });
    });
}

function sendMessage() {
    var text = document.getElementById('text').value;
    stompClient.send("/app/chat", {},
        JSON.stringify({'message': text }));
}

function showMessageOutput(messageOutput) {
    var response = document.getElementById('response');
    var p = document.createElement('p');
    p.appendChild(document.createTextNode(messageOutput.content))
    response.appendChild(p);
}

connect()
