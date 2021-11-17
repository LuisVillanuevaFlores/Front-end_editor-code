function execution_done_callback() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        data = JSON.parse(httpRequest.responseText)
        document.getElementById("result").innerHTML = data.result;
      } else {
        alert('There was a problem with the request.');
      }
    }
  }

function execute() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }

    httpRequest.onreadystatechange = execution_done_callback;
    httpRequest.open('POST', "/execute", true);
    httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    content = (document.getElementById("code").value)

    httpRequest.send(content);
  }



function execute2(){
  var url = 'http://localhost:5000/execute';
  var data = (document.getElementById("code").value);
  fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify(data),
    headers:{
      'Content-Type': 'application/json'
    }
  })
  .catch(error => console.error('Error:', error))
  .then(
    function (response) {
      return response.text().then(function(text) {
          console.log(text);
          document.getElementById("result").innerHTML = text;
      })
    }
  );
  // document.getElementById("result").innerHTML = response
}
