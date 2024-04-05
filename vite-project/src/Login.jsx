import propType from 'prop-types'
function Login(props) { 
    let welcomeMess = <h1>
        hello {props.name}
    </h1>
    console.log(welcomeMess)
    const errMess = <h1>
        please log in
    </h1>
    if(props.isLogged) { 
        return (welcomeMess)
    } 
    return errMess; 

}
Login.propType = {
    name: propType.string, 
    isLogged: propType.bool
}
Login.defaultProps = { 
    name: "Guest", 
    isLogged: false
}
export default Login