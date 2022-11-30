// ✅ withdraw inout field that only accepts numbers ("not a number" alert)
// ✅ validation tool to confirm that there is no overdraw from balance (alert, as well)
// ✅ success notification
// ✅ disable submission button if nothing is input
// ✅ withdraw button
// ✅ balance above withdraw entry fields
// ✅ updated balance upon successful submission
// ✅ imported user balance from the user context;

function Withdraw(){
  //all users input into the system; Shares state across multiple pages
  const ctx = React.useContext(UserContext);
  
  const [validTransaction, setValidTransaction] = React.useState(false);
  const [invalidMessage, setInvalidMessage] = React.useState("");
  const [amount,setAmount] = React.useState();
  const [currentUser,setCurrentUser] = React.useState(ctx.users[ctx.currentUserIndex]);
  const [status,setStatus] = React.useState(`Account Balance $ ${currentUser.balance}`);

  //Withdrawing set amount and updating the user's balance
  function withdrawAmount(amountToWithdraw){
    console.log(`withdrawing : ${amountToWithdraw}`);
    currentUser.balance = currentUser.balance - amountToWithdraw;
    setStatus(`Account Balance $ ${currentUser.balance}`);
  };

  //this is the amount of money that will be withdrawn
  const handleAmountChange = (event) => {
    event.preventDefault();
    let amt = event.target.value;
    let userBal = currentUser.balance;
    console.log(`amount to change ${amt}`);
    
    if (amt !== "" && amt !== null && amt!== NaN){
      console.log(`Current User Balance + Validation: $${userBal}`);
      
      if (userBal - amt >= 0 && userBal - amt < userBal){
        setValidTransaction(true);
        setAmount(amt);
        setInvalidMessage("Success!");
        return;
      } else {
        setValidTransaction(false);
        setInvalidMessage("Please enter number less than or equal to your total balance.")
        return;
      }
    } else {
      setInvalidMessage("error; please enter number");
      setValidTransaction(false);
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`handleAmountChange ${amount}`);
    withdrawAmount(amount);
  };

  return (
    <Card
      txtcolor="dark"
      bgcolor="light"
      header=<center><h1>Withdraw Money</h1></center>
      body=  
        <form onSubmit={handleSubmit}>
          <h6 id="total">{status}</h6>
          <input className="input" type="number" id="withdraw" name="withdraw" onChange={handleAmountChange}></input>
          <button type="submit" className="btn btn-dark" id="withdraw-submit" name="withdraw-submit" disabled={!validTransaction}>Submit</button>
          <h6>{invalidMessage}</h6>
        </form>
    />
  );
}
