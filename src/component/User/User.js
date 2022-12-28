import './User.css'
import React from 'react'
// function User({name = 'parsa', age, height , children}){
//     return(
//     <div className="contaner">
//         <p>name : {name}</p>
//         <p>age : {age}</p>
//         <p>height :{height}cm</p>
//         {children}
//     </div>
//     );
// }

class User extends React.Component{
    render(){
            return(
    <div className="contaner">
        <p>name : {this.props.name}</p>
        <p>age : {this.props.age}</p>
        <p>height :{this.props.height}cm</p>
        {children}
    </div>
    );

    }

}

User.default.props = {
    name : 'parsa'
}


export default User;