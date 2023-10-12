import {useEffect} from 'react';
import {sayHello,farewellUser} from './../actions/SayHelloActions';
import {useSelector,useDispatch} from 'react-redux';

export const HelloFunc = () => {

    const dispatch = useDispatch();
    const greeting = useSelector(state=>state.SayHelloReducer.greeting);
    const farewell = useSelector(state=>state.SayHelloReducer.farewell);

    useEffect(()=>{
        dispatch(sayHello());
        dispatch(farewellUser());
    },[dispatch])

    return(
        <div id="hello-func">
            <h2>{greeting}</h2>
            <p>{farewell}</p>
        </div>
    )
}