let messages = document.getElementById('messages');
let textBox = document.getElementById('messageBox');
let  button = document.getElementById('sendButton');

const vscode = acquireVsCodeApi();
var response = document.createElement('li');
function processMessage (msg) {
    if (msg == "help") {
        response.innerHTML = "some help doc";
    } else if (msg == "debug"){
      vscode.postMessage({
        command: 'debug'
      });
    } else if (msg == "alert") {
      vscode.postMessage({
        command: 'alert',
        text: 'London is calling'
      });
    } else {
        response.innerHTML = "'" + msg + "' is not a currently available action. Please refer to the help entry by typing help";
    };
};

button.addEventListener('click',function(){
    var userMessage = document.createElement('li');
    // to read content in the textbox
    userMessage.innerHTML = textBox.value;
    // adding list created into the unordered list
    messages.appendChild(userMessage);
    // messages remains on the textbox and to delete:
    textBox.value = "";
    // Bot reply
    var msg = userMessage.innerHTML.toString();
    processMessage (msg);
    messages.appendChild(response);
});
