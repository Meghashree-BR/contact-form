document.getElementById('contact form')
.addEventListener('submit',function(e)){
    e.preventDefault();
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var message=document.getElementById('mesage).value;
    var subject="new meassage from" + name;
    var body="name:" + "\nEmail:" +email + "\nMessage:" + message;
    var mailto_link='mailto:its your mail id' + '?subject=' + subject + '&body=' + encodeURIComponent(body);
    window.location.href=mailto_link;
});