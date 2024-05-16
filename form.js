document.getElementById('contact form')
.addEventListener('submit',function(e)
{
    e.preventDefault();
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var message=document.getElementById('mesage).value;
    var subject="new meassage from" + Meghashree;
    var body="name:" + "\nEmail:" +email + "\nMessage:" + message;
    var mailto_link='mailto:meghashree8792@gmail.com' + '?subject=' + subject + '&body=' + encodeURIComponent(body);
    window.location.href=mailto_link;
};