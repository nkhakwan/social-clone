import React from "react";
import NavBar from './NavBar';
import Profile from './Profile';
import Feed from './Feed';
import About from './About';
import FriendList from './FriendList';


function App(){
  return (
    <React.Fragment>
      <div className="col-md-12">
      <NavBar />
      </div>
      <div className="col-md-3">
      <Profile />
      </div>
      <div className="col-md-3">
      < Feed/>
      </div>
      <div className="col-md-3">
      < FriendList/>
      </div>
      <div className="col-md-3">
      <About />
      </div>
    </React.Fragment>
  );
}

export default App;


// navBar has 12
// feed 6
// rest everything 3