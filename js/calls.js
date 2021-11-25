function execute2(){
  var url = 'http://localhost:5000/execute';
  var data = (document.getElementById("code").value);
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
