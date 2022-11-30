// ✅ deposit input field that only accepts numbers ("not a number alert", "negative deposit alert")
// ✅ success message
// ✅ disable button if nothing is input
// ✅ deposit button
// ✅ balance above deposit entry fields
// ✅ balance is updated upon deposit

function Deposit(){
  //all users input into the system; Shares state across multiple pages
  const ctx = React.useContext(UserContext);
  
  const [invalidMessage, setInvalidMessage] = React.useState("");
  const [amount, setAmount] = React.useState();
  const [currentUser,setCurrentUser] = React.useState(ctx.users[ctx.currentUserIndex]);
  const [status,setStatus] = React.useState(`Account Balance $ ${currentUser.balance}`);
  const [validTransaction, setValidTransaction] = React.useState(false);

  //Depositing set amount and updating the user's balance
  function depositAmount(amountToDeposit){
    console.log(`depositing : ${amountToDeposit}`);
    currentUser.balance = Number(currentUser.balance) + Number(amountToDeposit);
    console.log(currentUser.balance);
    setStatus(`Account Balance $ ${currentUser.balance}`);
  };

  //this is the amount of money that will be deposited
  const handleAmountChange = (event) => {
    event.preventDefault();
    let amt = event.target.value;
    let userBal = currentUser.balance;
    console.log(`amount to change ${amt}`);
    
    if (amt !== "" && amt !== null && amt !== NaN){
      console.log(`Current User Balance in Validation: $${userBal}`);

      if (!(amt <= 0)){
        setValidTransaction(true);
        setAmount(amt);
        setInvalidMessage("Success! You now have more money.");
        return;
      } else {
        setValidTransaction(false);
        setInvalidMessage("Please enter number greater than zero and not a negative number.")
        return;
      }
    } else {
      setValidTransaction(false);
        setInvalidMessage("Please enter a number greater than zero and not a negative number. Letters are not allowed.")
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`handleAmountChange $${amount}`);
    depositAmount(amount);
  };

  return (
  <Card
    txtcolor="dark"
    bgcolor="light"
    header=<center><h1>Deposit Money</h1></center>
    body=  
      <form onSubmit={handleSubmit}>
        <h6 id="total">{status}</h6>
        <input className="input" type="number" id="deposit" name="deposit" onChange={handleAmountChange}></input>
        <button type="submit" className="btn btn-dark" id="deposit-submit" name="deposit-submit" disabled={!validTransaction}>Submit</button>
        <h6>{invalidMessage}</h6>
      </form>
    />
  );
}

