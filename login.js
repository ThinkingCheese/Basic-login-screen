class checkCreds{
  constructor(loginButton,userbox,passbox){
    this.loginbutton = loginButton
    this.userbox = userbox;
    this.passbox = passbox;
    this.attempts = 5
  }
  get userbox(){
    return this._userbox;
  }
  get passbox(){
    return this._passbox;
  }
  set userbox(userbox){
    this._userbox = userbox
  }
  set passbox(passbox){
    this._passbox = passbox
  }
  check(){
    if (this.attempts == 0)
      return;
    var users = ["bob","billy"];
    var passwords = ["passW0RD","b!llyB3tt3r"];
    var userlocation = users.indexOf(this.userbox.value.toLowerCase())
    if (userlocation == -1){
      alert("Unknown username or password");
      return;
    }
    if (userlocation != -1){
      if (this.passbox.value == passwords[userlocation]){
        alert("Allowed");
        return;
      }
      alert("Unknown username or password");
      this.attempts -= 1
      if (this.attempts == 0)
        this.resetCooldown();
    }
  }
  resetCooldown(){
    alert("Max attempts reached, please come back at a later time and try again.")
    // wait it out
    this.attempts = 5
  }
}

var loginButton = document.getElementById("login");
var userbox = document.getElementById("user");
var passbox = document.getElementById("pass");

var checker = new checkCreds(loginButton,userbox,passbox);
loginButton.addEventListener("click",function(){
  checker.check();
});