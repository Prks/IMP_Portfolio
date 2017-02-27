function printName(){
      var names = document.getElementById("name");
      var toPrint = document.getElementById("after");
      toPrint.innerHTML +="<p>" + names.value + "</p>";
    }