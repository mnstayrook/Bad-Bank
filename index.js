function Spa() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{currentUserIndex:0,users:[{name:'Joe Test',email:'joe@test.com',password:'secret',balance:100}]}}>
        <div className="container" style={{padding: "20px"}}>
            <Route path="/"               exact component={Home} />
            <Route path="/CreateAccount/"       component={CreateAccount} />
            <Route path="/deposit/"             component={Deposit} />
            <Route path="/withdraw/"            component={Withdraw} />
            <Route path="/alldata/"             component={AllData} />
            {/*<Route path="/aboutsite/"           component={AboutSite} />*/}
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
