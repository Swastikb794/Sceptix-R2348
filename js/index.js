function sendmail(){
    var command = "mailto";
    var email = "22g51.swastik@sjec.ac.in";
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var body = document.getElementById("message").value
    var send_str = command.concat(":", email, "?subject=", subject," -From:", name , "&body=", body);
    if ((name.length != 0) && (subject.length != 0) && (body.length != 0)){
        window.open(send_str);
    }
    else{
        if (name.length == 0){
            window.alert("Please enter your name.");
        }
        if (subject.length == 0){
            window.alert("Please enter your your subject of contact.");
        }
        if (body.length == 0){
            window.alert("Please enter your message.");
        }
    }
}
