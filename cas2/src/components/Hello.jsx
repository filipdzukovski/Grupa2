
export function Hello(props){
    console.log(props);
    return(
        <div>
            <p>Hello, {props.name} {props.lastName}</p>
            <p>I am {props.age} old</p>
        </div>
    )
} 