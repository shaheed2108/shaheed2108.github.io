

let userBtn = document.querySelector("#searchBtn");

let searchUser = document.querySelector("#searchUser");


userBtn.addEventListener("click", (e) => {
    let userText = searchUser.Value;

    if(userText != ""){
    // Fetch API
    fetch(`https://api.github.com/users/a/${userText}`).then(result => result.json()).then(data => {
        if(data.message == "Not Found"){
            // show alert
        } else {
            // show profile
        }
    })

    } else {
        // clear profile
    }
})