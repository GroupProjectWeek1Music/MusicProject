 const serverAddres = 'http://localhost:3000/login/'
 const serverHome =  'http://localhost:3000/home/'
 const idApp = '1773998629350718'
 const tokenName = "fbToken"

  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    
    if (response.status === 'connected') {
        axios.post(serverAddres, {
          accessToken : response.authResponse.accessToken, 
        })
        .then(function (data) {
          console.log(data);
          localStorage.setItem(tokenName, data.data);
        })
        .then(function(){
          console.log("setelah login")
          window.location.replace("/home.html")
        })
        .catch(function (error) {
          console.log(error);
        });

      
    } else {
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    }
  }

  window.fbAsyncInit = function() {
    FB.init({
      appId      : idApp,
      cookie     : true,  // enable cookies to allow the server to access 
                          // the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.8' // use graph api version 2.8
    });

    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });

  };

  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0&appId=1773998629350718&autoLogAppEvents=1';
    fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'))

  
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
  }

 
    

