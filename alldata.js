// ✅ need to style data for Card instead of showing as JSON string
// ✅ .map to iterate through the users 


function AllData(){
  const ctx = React.useContext(UserContext);
  const user = ctx.users;  


  const loopingData = user.map((user, index) => (
  <ul className="User Data" key={index}>
    <li>Name: {user.name}</li>
    <li>Email: {user.email}</li>
    <li>Password: {user.password}</li>
    <li>Balance: {user.balance}</li>   
  </ul>
  ));
  
  return (
    <Card
      txtcolor="dark"
      bgcolor="light"
      header=<center><h1>All Data</h1></center>
      title="All Stored Data"
      text="Name, Email, and Password for each account is displayed below."
      body={loopingData}
    />
  );
}


