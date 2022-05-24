import react, {useState} from 'react0';

const hook= {}=> {
    const{count, setcount} =useState{0};

    const IncNum{}=> {
        setCount{count +1};
    }

    return{
        <>
        <h1>{count}</h1>
             <button onClick={IncNum}>Click Me</button>
        </>
    };
}
export default hook;
