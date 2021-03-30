function loadText(){
    // step 1 - set the xml http req obj
    var xhttp = new XMLHttpRequest()

    // step 3 - define ajax response callback method
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById('ajaxText').innerHTML = this.responseText
        }
    };

    // step 2 - prepare to open ajax req
    xhttp.open('GET', './ajax_content/ajax_info.txt');

    // step 4 - send the ajax req for data
    xhttp.send();
}