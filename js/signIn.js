$('#signin').click(function () {
    let newUser =$("#email").val();
    let passa = $("#password").val();
 let users = JSON.parse(window.localStorage.getItem('localData')); //JSON.parse(window.localStorage.getItem('localData'));
 //alert(users);

 
if(users != null)
{
  const currentUser = users.find(({
    email
  }) => newUser === email);
  // console.log(currentUser);
  if(currentUser && currentUser.email === newUser && currentUser.pass === passa)
  {
    window.location.href = "cityGuide.html";
  }
  else
  {
    // event.preventDefault();
    //show message that please enter correct user name and
    $('#wronginfo').removeClass('hidden');
  }
}
 else
 {
  $('#registerFirst').removeClass('hidden');
 }
});
