var socket = io('https://cchs-open-house.herokuapp.com');

function sendMessage(event) {
  event.preventDefault();
  
  socket.emit('message', {
    sender: yourName,
    text: $('#message').val()
  });
  $('#message').val('');
}