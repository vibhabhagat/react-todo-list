import React, { useState } from "react";
import todo from "../img/checklist.png"

const Todo = () => {

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);

    //Add Items
    const addItem = () => {
        if (!inputData) {

        } else {
            setItems([...items, inputData]);
            setInputData('')
        }
    }

    //delete the items
    const deleteItem = (id) => {
        const updateditems = items.filter((elem, ind) => {
            return ind !== id;
        })

        setItems(updateditems);
    }

    // Remove All
    const removeAll = () => {
        setItems([]);
    }
    return (
        <>
            <div className="todo-main">
                <div className="todo-child">
                    <figure>
                        <img src={todo} alt="Todo Logo"/>
                        <figcaption>Add Your List Here</figcaption>
                    </figure>

                    <div className="add-todo-item">
                        <input
                            type="text" placeholder="Add list item..."
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)}
                        />
                        <button onClick={addItem}>Add</button>
                        {/* <i className="fa-solid fa-circle-plus add-btn" title="Add item"></i> */}
                    </div>
                    <div className="show-item">

                        {
                            items.map((elem, ind) => {
                                return (
                                    <div className="each-item" key={ind}>
                                        <input type="text" value={elem}/>
                                        {/* <h5>{elem}</h5>  */}

                                        <button onClick={() => deleteItem(ind)}>Del</button>
                                        {/* <i className="fa-solid fa-trash-can add-btn" title="delete Item"></i> */}
                                    </div>
                                )
                            })
                        }

                    </div>

                    <div>
                        <button className="btn effect" onClick={removeAll}>
                            <span>Remove All List</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo