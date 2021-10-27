function User(fName,lName,email,pass,confirmpas){
    this.fName=fName;
    this.lName=lName;
    this.email=email;
    this.pass=pass;
    this.confirmpas=confirmpas;
  }
  $('#register').click(function(){
      let fName=$("#firstName").val();
      let lName=$("#lastName").val();
      let email=$("#email").val();
      let pass=$("#password").val();
      let confirmpas=$("#confirmPassword").val();
      if(fName ==="" || lName === "" || email===""|| pass==="" || confirmpas==="" )
      {
         $('#failedMassege').removeClass('hidden');
       // event.preventDefault();
      }
      else{
      let newUser = new User(fName,lName,email,pass,confirmpas);
      let selectedUsers = JSON.parse(window.localStorage.getItem('localData'));
      console.log(selectedUsers);
      if (selectedUsers == null) {
         let a = [];
         a.push(newUser);
         console.log(newUser);
         window.localStorage.setItem('localData', JSON.stringify(a));
         window.location.href= ("signIn.html");
      } else {
         selectedUsers.push(newUser);
         window.localStorage.setItem('localData', JSON.stringify(selectedUsers));
        window.location.href= ("signIn.html");
      }
     }
  });