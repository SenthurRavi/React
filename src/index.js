import React from 'react';
import ReactDOM from 'react-dom';



var DisplayAllItems = function()
{
    var display = array.map(function(x)
    {
        return <div> 
          <p style = {{color: 'blue', textAlign: 'center'}}>
            Id: {x.id} Name: {x.name}    UserType: {x.UserType}</p>
          </div>;
    });

    return(
        <div style = {{border: '3px black solid', marginLeft: '30rem', marginRight: '30rem'}}> {display} </div>
    );
}


function User()
 {
  var findusertype = array.filter(function(user) 
  {
    return user.UserType === "Designer";
  }).map(function(displayuser){
        return <div>
          <p style = {{color: 'blue', textAlign: 'center'}}> Id: {displayuser.id} Name: {displayuser.name} Usertype: {displayuser.UserType }</p>
        </div>
  });
  return(
    <div style = {{border: '3px black solid', marginLeft: '30rem', marginRight: '30rem'}}>
      {findusertype}
    </div>
  );
}

var Jletter = function() {
 var findletterJ = array.filter(function(jfilter){
     return jfilter.name[0] === 'J'
 }).map(function(filterj){
   
     return <div>
      <p style = {{color: 'blue', textAlign: 'center'}}> Id:{filterj.name} Name: {filterj.name} Usertype: {filterj.UserType} </p>
        </div>
 });
 return(
   <div style = {{border: '3px black solid', marginLeft: '30rem', marginRight: '30rem'}}>
     {findletterJ}
   </div>
 );
}


var Age = function() {
  var findage = array.filter(function(btwage) {
    return btwage.age > 28 && btwage.age <= 50;
  }).map(function(betweenage){
    return <div>
      <p style = {{color: 'blue', textAlign: 'center'}}> Id: {betweenage.id} Name: {betweenage.name} Usertype: {betweenage.UserType}</p>
    </div>
  });
  return(
    <div style = {{border: '3px black solid', marginLeft: '30rem', marginRight: '30rem'}}> {findage} </div>
  );
}


var TotalAgeDesigner = function() {

  var YearDesigner = array.filter(function(x){
            return x.UserType === "Designer";
  }).map(function(x){
    return <div>
      <p style = {{color: 'blue', textAlign: 'center'}}> {x.years} </p>
    </div>
  });
  return(
    <div style = {{border: '3px black solid', marginLeft: '30rem', marginRight: '30rem'}}> {YearDesigner} </div>
  );
}



var array = [
    {id: '1', name: "Joe", UserType: "Developer", age:31, years:11},
    {id: '2', name: "Hill", UserType: "Designer", age:26, years:4},
    {id: '3', name: "John", UserType: "Teacher", age:24,years: 2},
    {id: '4', name: "Sam", UserType: "Entreprenuer", age:58,years:25},
    {id: '5', name: "Jack", UserType: "Designer", age:43, years: 18}
];




var Hello = function()
{
  return(
    <div>
      <h1 style = {{textAlign: 'center', padding: "10 10 10 10" }}> Display All Items </h1>
      <DisplayAllItems/>
      <h1  style = {{textAlign: 'center'}}> Display Based on User type</h1>
      <User/>
      <h1  style = {{textAlign: 'center'}}> Filter all data starting with J </h1>
      <Jletter/>
      <h1  style = {{textAlign: 'center'}}> Filter all data based on age greater than 28 and age less than or equal to 50 </h1>
      <Age/>
      <h1  style = {{textAlign: 'center'}}> Find the Total Years of the Designers </h1>
      <TotalAgeDesigner/>
    </div>
  );
}

ReactDOM.render(
  <Hello/>,
  document.getElementById("root")
);