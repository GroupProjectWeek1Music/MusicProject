// const serverAddress = 'http://localhost:3000/signUp/'


function postRegister() {
    // alert('Hello')
    let name = $("#name").val()
    let email = $("#email").val()
    let password = $("#password").val()
    console.log(name, email, password)
    axios.post("http://localhost:3000/signUp",{
        name: name,
        email: email,
        password: password
    })
        .then(function(result) {
            window.location.replace("/index.html")
        })
        .catch(function(err) {
            console.log(err)
        })
} 