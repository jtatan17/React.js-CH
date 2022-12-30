import "./Item.css";

function FlexWrapper(props) {
    return <div className="flex">{props.children}</div>
}

export default FlexWrapper;