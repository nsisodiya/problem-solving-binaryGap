function solution() {
  function emailValid(e) {
    //I am using function inside function because I do not know how codility will behave.
    //Proper way , is to keep this function outside.
    if (e.split("@").length - 1 !== 1) {
      return false;
    }
    var firstPart = e.split("@")[0];
    var secondPart = e.split("@")[1];
    if (!(1 <= firstPart.length && firstPart.length <= 64)) {
      return false;
    }
    if (!(1 <= secondPart.length && secondPart.length <= 64)) {
      return false;
    }

    if (!(/^[a-z0-9.]+$/i.test(firstPart))) {
      return false;
    }
    if (!(/^[a-z0-9.]+$/i.test(secondPart))) {
      return false;
    }

    return true;
  }

  function phoneValid(p) {
    if (p.length === 0) {
      return false;
    }
    if (!(/^[0-9 -]+$/.test(p))) {
      return false;
    }
    if (p.split(" ").join("").split("-").join("").length < 6) {
      return false;
    }

    return true;
  }

  isTypePerson = document.getElementById("type_person").checked;
  isTypeCompany = document.getElementById("type_company").checked;

  if (isTypePerson) {

    var firstName = document.getElementById("first_name").value;
    var lastName = document.getElementById("last_name").value;
    var email = document.getElementById("email").value;
    if (firstName.length === 0 || lastName.length === 0 || !(emailValid(email))) {
      return false;
    } else {
      return true;
    }
  }

  if (isTypePerson) {
    var companyName = document.getElementById("company_name").value;
    if (companyName.length === 0 || !(phoneValid(email))) {
      return false;
    } else {
      return true;
    }
  }
}

solution();