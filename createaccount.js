// ✅ NEED: Email Validation (@ and .)
// ✅ NEED: Password Validation (Cannot be less than 8 char long)
// ✅ NEED: Disabled submit button if nothing is input
// ✅ Success message
// ✅ create another account button


function CreateAccount(){
  const ctx = React.useContext(UserContext);  
  
  const [show, setShow]                       = React.useState(true);
  const [name, setName]                       = React.useState('');
  const [email, setEmail]                     = React.useState('');
  const [password, setPassword]               = React.useState('');
  const [validField, setValidField]           = React.useState(false);
  const [invalidName, setInvalidName]         = React.useState("");
  const [invalidEmail, setInvalidEmail]       = React.useState("");
  const [invalidPassword, setInvalidPassword] = React.useState("");
  
  var validName = React.useRef(false);
  var validEmail = React.useRef(false);
  var validPass = React.useRef(false);

  const accountValidation = () => {
    //console.log("valid field status: " + validField);
    //console.log("Valid Name Status: " + validName);
    //console.log("email acct: " + validEmail);
    //console.log("Pass word act: " + validPass);
    if (validName === false) {setValidField(false); return;};
    if (validEmail === false) {setValidField(false); return;};
    if (validPass === false) {setValidField(false); return;};
    setValidField(true);
  }

  const nameValidation = (event) => {
    //console.log(event.target.value);
    if (event.target.value.length >= 3){
      validName = true;
      setInvalidName(`Welcome, ${event.target.value}`);
      setName(event.currentTarget.value);
    } else {
      validName = false;
      setInvalidName("Please type at least three characters.");
    }
    accountValidation();
    setTimeout(() => setInvalidName(""), 3000);
  };

  function validateEmail(em) {       // "em" is just filler for the function. It gets replaced with "email" in the next function.
    const regex = /\w+@\w*\.\w+/;
    if (em.match(regex)) {
      return true;
    } else {
      return false;
    };
  };

  const emailValidation = (event) => {
    let userEmail = event.currentTarget.value;
    //console.log(userEmail);
    
    if (validateEmail(userEmail)) {
      validEmail = true;
      setInvalidEmail("Success");
      setEmail(userEmail);
    } else {
      validEmail = false;
      setInvalidEmail("Email is invalid");
    };
    accountValidation();
    setTimeout(() => setInvalidEmail(""), 3000);
  };

  const passwordValidation = (event) => {
    //console.log(event.currentTarget.value);
    if (event.currentTarget.value.length > 7){
      validPass = true;
      setInvalidPassword("Success! Your password is long enough.");
      setPassword(event.currentTarget.value);
    } else {
      validPass = false;
      setInvalidPassword("Password cannot be less than 8 characters long!");
    };
    accountValidation();
    setTimeout(() => setInvalidPassword(""), 3000);
  };
  


  const handleCreate = (event) => {
    event.preventDefault();
    console.log(name,email,password);
    ctx.users.push({name,email,password,balance:100});
    ctx.currentUserIndex++;
    setShow(false);
  };

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  };

  return (
    <Card
      txtcolor="dark"
      bgcolor="light"
      header=<center><h1>Create New Account</h1></center>
      body={show ? (  
              <form onSubmit={handleCreate}>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="John Doe" onChange={nameValidation}/><br/>
              <p>{invalidName}</p>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="me@gmail.com" onChange={emailValidation}/><br/>
              <p>{invalidEmail}</p>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" onChange={passwordValidation}/><br/>
              <p>{invalidPassword}</p>
              <button type="submit" className="btn btn-dark" onClick={handleCreate} disabled={!validField}>Create Account</button>
              </form>
            ):(
              <>
              <h5>Success!</h5>
              <h6>Account created.</h6>
              <button type="submit" className="btn btn-dark" onClick={clearForm}>Add another account</button>
              </>
            )}
    />
  );
}

