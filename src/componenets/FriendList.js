import React from "react";
import Friend from "./Friend";

const FriendData = [
  {
    firstName: 'Abbath',
    lastName: 'test',
    email: 'test@test.com',
    phone: '(555) 555-5555'
  },
  {
    firstName: 'testing',
    lastName: 'moretesting',
    email: 'sdfads',
    phone: '(324)345-9332'
  },
  {
    firstName: 'tester2',
    lastName: 'moretesttingngggg',
    email: 'dfdadas@dfadlskajf.com',
    phone: '(666) 555-4444'
  }
];
function FriendList(){
  return(
  <React.Fragment>
    <hr/>
    <div class="friendList">
    { FriendData.map((friend, index)=>
      <Friend
        firstName={friend.firstName}
        lastName={friend.lastName}
        email={friend.email}
        phone={friend.phone}
        key={index}/>
      )}
    </div>
  </React.Fragment>
  );
}

export default FriendList;

