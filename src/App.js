import User from './component/Card/Card.js'
import './App.css'

function App(){

    // let users = [
    //    { name : 'milad', age : '27', height : '180'}
    // ]
    return(
    // <div className="rows">
    //     {/*<User name = {Users[0].name} age = {Users[0].age} height = {Users[0].height}/>*/}
    //     <User {...users[0]}/>
    //     <User  age = '27' height = '192'>
    //         <div>poya</div>
    //         </User>

    //     <User name ='mina' age = '27' height = '160' />
    // </div>

<>
<header>header</header>
<div className="row">
    <Card shoeName = 'shoe1' shoePic = './images/01.png'/>
    <Card shoeName = 'shoe2' shoePic = './images/02.png'/>
    <Card shoeName = 'shoe3' shoePic = './images/03.png'/>
</div>
<footer>footer</footer>
</>
    );
}

export default App;