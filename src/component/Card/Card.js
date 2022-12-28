import Button from './Button.js'

import './Card.css'

function Card({shoeName, shoePic}){ //object destructuring
    return(
    <div className="col">
        <div className="card">
            <img calssName = 'card-img' src = {shoePic} />
            <div className="card body">
                <h5 className="card-title">{shoeName}</h5>
                <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, architecto velit.  Consectetur pariatur facilis quasi saepe quos aspernatur quo unde perspiciatis beatae enim. Distinctio animi soluta ut neque sed repellat?</p>
                <Button />
            </div>
        </div>
    </div>

    );
}

export default Card;