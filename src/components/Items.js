import React,{useState} from 'react'
import InputForm from './Input'


function Items() {
    const [addedItem, setaddedItem] = useState([])

    const addItem = toadd =>{

        const newAdd = [toadd, ...addedItem]

        setaddedItem(newAdd)
        console.log(...addedItem)
    }
    return (
        <div>
            <InputForm onClick ={addItem}/>
            
        </div>
    )
}

export default Items
