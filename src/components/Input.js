import React,{useState} from 'react'
import axios from 'axios'

import "./Home.css"


const InputForm =(props) =>{

    const [Link,setLink] = useState('')
    const [newItem, setnewItem] = useState('')


    const submitHandler = e => {
        e.preventDefault();        
        console.log('going to login')

        axios.post('Link'
        ).then(res=>{
            if(res.ok){
                console.log("success")
                
            }
            else{
                console.log("not successful")
            }
        })
        .catch(error => {
            console.log(error.response)
        })
        
        
    }

    const handleLink = e=> {
        setLink(e.target.value)
    }

    const handleChange = e=> {
        setnewItem(e.target.value)
    }
    
    const itemHandler = e =>{
        e.preventDefault();
        //console.log(newItem)
        
        props.onClick({
            id:Math.floor(Math.random() * 1000),
            text: newItem
        })
        
        setnewItem('')
    }
    return (
        <div className='form-cont'>
        <form className='form' onSubmit={submitHandler}>
                    <div className="link-container">
                    <label>
                        <h3>Add a Link or Photo</h3>
                        
                        <input type="url"  placeholder="Add Link" onChange={handleLink} value={Link} />
                        
                        </label>
                    </div>
                    
                    <div className="question-container">
                        <label>
                        <h3>Question</h3>
                        <h2>What is your Question?</h2>
                        <h4>Answers</h4>
                        <input type="text"  placeholder="Answer" onChange={handleChange} value={newItem} />
                        <button className="add-button" onClick={itemHandler} >Add Option</button>
                        </label>
                    </div>
                
                <input className="submit-button" type="submit" value="Submit" />
            </form>
        </div>
        
        
        
    )
}

export default InputForm
