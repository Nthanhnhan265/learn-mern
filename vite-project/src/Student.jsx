import PropsType from "prop-types";
function Student (props) { 
    return (
        <div className="each-student">
            <h4>Name: {props.name}</h4>
            <h4>Age: {props.age}</h4>
            <h4>Is Student: {props.isStudent? "Yes":"No"}</h4>
        </div>
    )

}
Student.PropsType = {
    name: PropsType.string,
    age: PropsType.age, 
    isStudent: PropsType.bool
}
Student.defaultProps = { 
    name: "Guest", 
    age: "0", 
    isStudent: false
}
export default Student; 