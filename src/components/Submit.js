import React, {useState} from 'react'
import InputForm from './Input';
import Input from './Input'
import axios from "axios";


const Submit = () => {
    const [user,setUser] = useState({link:'', option:'', poll:''});
    

    const Submit = details => {
        var url = setUser(details.link)
        console.log(details.email);
        console.log(details.password);
        
        axios.post(url,
        {
                'Options': details.option,
                'Polls': details.poll
            }
        ).then(res=>console.log('it worked', res))
        .catch(error => {
            console.log(error.response)
        })
    }
    return (
        <div>
            
        </div>
    )
}

export default Submit;
