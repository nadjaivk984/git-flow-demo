import React from 'react';
import './ListView.css';

export const ListView=({props1})=>{
    console.log(props1)
     return (
         props1.map(user=>{
             return <p className="email">{formatEmail(user.email)}</p>
         })
     )

}

const formatEmail= function (user_email) {
    let avg, splitted, part1, part2,part3;
    splitted = user_email.split("@");
    part1 = splitted[0];
  
    avg = part1.substring(0,3);
  //  console.log(avg)
   part3=part1.substring(part1.length-2)

   
    part2 = splitted[1];
    return avg + "..." +part3+ "@" + part2;
};