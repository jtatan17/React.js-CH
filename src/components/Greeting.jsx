import "./Item.css";


function Greeting (props) {
    return (
        <div className="greeting">
            <h2>
                {props.text}
            </h2>
        </div>
    )
}


export default Greeting