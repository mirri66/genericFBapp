 // Additional JS functions here
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '481440575256369', // App ID
      channelUrl : '//www.stanford.edu/~gstang/nalini/channel.html', // Channel File
      status     : true, // check login status
      cookie     : true, // enable cookies to allow the server to access the session
      xfbml      : true  // parse XFBML
    });

    // Additional init code here



FB.getLoginStatus(function(response) {
  if (response.status === 'connected') {
    // connected
    FB.api('/me', function(response) {
      var dtext = "";
      dtext += "<p>"+response.first_name+"</p>";
      console.log("console says:" + response.data)
      document.getElementById('fbinfo').innerHTML=dtext;
      getProfileImage();
    });


  } else if (response.status === 'not_authorized') {
    // not_authorized
     var loginbtn = document.getElementById('loginbtn');
     loginbtn.innerHTML="<button onclick=\"login()\">login</button>";
//     loginbtn.onClick=function(){alert('test');login()};
  } else {
    // not_logged_in
     var loginbtn = document.getElementById('loginbtn');
     loginbtn.innerHTML="<button onclick=\"login()\">login</button>";
  }
 });

  };
 //login

function login() {
    FB.login(function(response) {
        if (response.authResponse) {
            // connected
            location.reload();
        } else {
            // cancelled
        }
    });
}

function getProfileImage() {
 
    var photo = document.getElementById('photo');
 
    FB.api("/me/picture?width=180&height=180",  function(response) {
      
        var profileImage = response.data.url.split('https://')[1]
        photo.innerHTML='<img src=\"http://' + profileImage + '\" width=\"100px\">';
    }); 
}


  // Load the SDK Asynchronously
  (function(d){
     var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement('script'); js.id = id; js.async = true;
     js.src = "//connect.facebook.net/en_US/all.js";
     ref.parentNode.insertBefore(js, ref);
   }(document));

