$(document).ready(function() {
  const Signup_Account = $("#Signup_Account");
  const Signup_Password = $("#Signup_Password");
  $(".Signup_Button").on("click", function() {
    if (Signup_Account.val() === "" || Signup_Password.val() === "") {
      return alert("請輸入帳號及密碼");
    }
    axios
      .post("https://express-github-io.onrender.com/signup", {
        email: Signup_Account.val(),
        password: Signup_Password.val()
      })
      .then(function(response) {
        if (response.data.message === "註冊成功") {
          alert("註冊成功");
        } else if (response.data.message === "此 email 已經被使用") {
          alert("此 email 已經被使用");
        } else {
          alert("註冊失敗");
        }
      })
      .catch(error => console.log(error));
  });

  const Signin_Account = $("#Signin_Account");
  const Signin_Password = $("#Signin_Password");
  $(".Signin_Button").on("click", function() {
    if (Signin_Account.val() === "" || Signin_Password.val() === "") {
      alert("請輸入帳號及密碼");
    }
    axios
      .post("https://express-github-io.onrender.com/signin", {
        email: Signin_Account.val(),
        password: Signin_Password.val()
      })
      .then(response => {
        if (response.data.message === "成功登入") {
          alert("成功登入");
        } else if (response.data.message === "密碼錯誤") {
          alert("密碼錯誤");
        } else {
          alert("用戶不存在");
        }
      })
      .catch(error => {
        console.log(error);
        alert("無法登入");
      });
  });
});
