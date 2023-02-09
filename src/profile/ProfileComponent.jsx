import React from 'react';

const ProfileComponent = (props) => {
    const handleName =(props) => {
        return alert(`this is ${props}'s profile`);
    }
        return (
            <div 
                style={{
                border:'solid, 1px',
                borderColor:'#BDBDBD',
                borderRadius:'10px',
                backgroundColor:'#1C1C1C',
                width:'300px',
                padding:'10px', 
                marginTop:'200px',
                marginLeft:'auto', 
                marginRight:'auto'}}>
                <div>{handleName(props.alert)}</div>    
                <div>
                <img style={{height:'100px', width:'100px', borderRadius:'50px'}} src={props.src} />
                {props.children}
                </div>
                <div 
                style={{fontFamily:'arial'}}>
                    <h3 style={{fontSize:'18px', color:'#FFFFFF'}}>{props.fullName}</h3>
                    <h4 style={{fontSize:'14px' , color:'#F7BE81'}}>{props.bio}</h4>
                    <h4 style={{fontSize:'14px', color:'#F5ECCE'}}>{props.profession}</h4>
                </div>
            </div>
    );
}



export default ProfileComponent;
