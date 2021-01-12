class User {
  constructor(
    fullName,
    cPhoneNumber,
    cemail,
    choices,
    cPassword,
    gender,
    ccPassword
  ) {
    this.fullName = fullName;
    this.cPhoneNumber = cPhoneNumber;
    this.cemail = cemail;
    this.choices = choices;
    this.cPassword = cPassword;
    this.gender = gender;
    this.ccPassword = ccPassword;
  }

  //method
  fullNameVal() {
    let fullName = this.fullName;
    let cfullName = fullName.length;
    let mfullName = [];

    if (fullName === "") {
      mfullName.push("Full name can not be empty");
    }
    if (cfullName < 6) {
      mfullName.push("Name must have more than 5 char");
    }

    if (cfullName > 20) {
      mfullName.push("Name must have less than 21 char");
    }

    let fr = /\d+/g;
    let frCheck = fullName.match(fr);

    if (frCheck) {
      mfullName.push("Number is not allowed");
    }

    let cmfullName = mfullName.length;

    if (cmfullName > 0) {
      wfname.style.display = "block";
    } else {
      wfname.style.display = "none";
    }
    return mfullName;
  }

  cPhoneNumberVal() {
    let cPhoneNumber = this.cPhoneNumber;
    let mcPhoneNumber = [];

    if (cPhoneNumber.length != 11) {
      mcPhoneNumber.push("Phone number must be 11 digits long");
    }

    let cmcPhoneNumber = mcPhoneNumber.length;
    if (cmcPhoneNumber > 0) {
      wnumber.style.display = "block";
    } else {
      wnumber.style.display = "none";
    }

    return mcPhoneNumber;
  }

  cemailVal() {
    let cemail = this.cemail;

    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let checkEmailRegex = cemail.match(emailRegex);
    if (cemail === "") {
      wemail.style.display = "block";
      return "Email can not be empty";
    } else if (!checkEmailRegex) {
      wemail.style.display = "block";
      return "Email is not valid";
    } else {
      wemail.style.display = "none";
    }
  }

  choicesVal() {
    let choices = this.choices;
    let choicesLength = choices.length;
    let count = 0;

    for (let i = 0; i < choicesLength; i++) {
      if (choices[i].checked) {
        count += 1;
      }
    }

    if (count === 0) {
      wchoice.style.display = "block";
      return "Please select one";
    } else {
      wchoice.style.display = "none";
    }
  }

  genderVal() {
    let gender = this.gender;
    let gendersLength = gender.length;
    let count = 0;

    for (let i = 0; i < gendersLength; i++) {
      if (gender[i].checked) {
        count += 1;
      }
    }

    if (count === 0) {
      wSex.style.display = "block";
      return "Please select one";
    } else {
      wSex.style.display = "none";
    }
  }

  cPasswordVal() {
    let cPassword = this.cPassword;

    let pr = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );

    let CheckPr = cPassword.match(pr);

    if (!CheckPr) {
      wpass.style.display = "block";
      return "Password must contain 8 char including one uppercase, one lowercase, one special char, a number.";
    } else {
      wpass.style.display = "none";
    }
  }

  ccPasswordVal() {
    let cPassword = this.cPassword;
    let ccPassword = this.ccPassword;

    if (cPassword !== ccPassword) {
      // alert(ccPassword);
      wcpass.style.display = "block";
      return "Password did not match";
    } else {
      wcpass.style.display = "none";
    }
  }
}

const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();

  let wfname = document.getElementById("wfname");
  let wnumber = document.getElementById("wnumber");
  let wemail = document.getElementById("wemail");
  let wchoice = document.getElementById("wchoice");
  let wSex = document.getElementById("wSex");
  let wpass = document.getElementById("wpass");
  let wcpass = document.getElementById("wcpass");

  const fullName = document.getElementById("fullName").value;
  const cPhoneNumber = document.getElementById("cPhoneNumber").value;
  const cemail = document.getElementById("cemail").value;
  const cPassword = document.getElementById("cPassword").value;
  const ccPassword = document.getElementById("ccPassword").value;
  const choices = document.myForm.choice;
  const gender = document.myForm.gender;

  const user = new User(
    fullName,
    cPhoneNumber,
    cemail,
    choices,
    cPassword,
    gender,
    ccPassword
  );

  wfname.innerText = user.fullNameVal();
  wnumber.innerText = user.cPhoneNumberVal();
  wemail.innerText = user.cemailVal();
  wchoice.innerText = user.choicesVal();
  wSex.innerText = user.genderVal();
  wpass.innerText = user.cPasswordVal();
  wcpass.innerText = user.ccPasswordVal();
});
