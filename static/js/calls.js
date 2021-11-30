function execute2(){
  var url = 'http://127.0.0.1:44631/execute';
  var editor = ace.edit("editor");
  var data = editor.getValue()
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers:{
      'Content-Type': 'application/json'
    }
  })
  .catch(error => alert("Hubo un error, intentelo de nuevo")
  )
  .then(
    function (response) {
      return response.text().then(function(text) {
          document.getElementById("result").innerHTML = text.replace(new RegExp('\r?\n','g'), '<br />');
      })
    }
  );
}
