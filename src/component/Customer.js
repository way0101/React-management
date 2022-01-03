import React from 'react'; 

function Customer(props){
    return(
        <div>
            <CustomerProfile id={props.id} image={props.image} name={props.name}/>
            <CustomerInfo birthday={props.birthday} univ={props.univ} gender={props.gender} />
        </div>
    )
}


function CustomerProfile(props){
    return(
        <div>
            <img src={props.image} alt="profile"/>
            <h2>{props.name}({props.id})</h2>
        </div>
    )
}

function CustomerInfo(props){
    return(
        <div>
            <p>{props.birthday}</p>  
            <p>{props.univ}</p>  
            <p>{props.gender}</p>  
        </div>
    )
}

export default Customer;