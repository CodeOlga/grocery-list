import { Component } from 'react';
import check from './check.png';

export class GroceryList extends Component {
    state = {
        userInput: '',
        groceryList: []
    }

    onChangeEvent(e){
        // console.log(e.target.value)
        this.setState({userInput: e});
        // console.log(e)
    }

    addItem(input) {
        if (input === '') {
            alert ('Please enter an item')
        } 
        else {
        let listArray = this.state.groceryList;
        listArray.push(input);
        this.setState({groceryList: listArray, userInput: '' })
        // console.log(listArray)
        }
    }

    deleteItem() {
        let listArray = this.state.groceryList;
        listArray = [];
        // listArray.length = 0; второй способ
        this.setState({groceryList: listArray})
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');

    }

    onFormSubmit(e) {
        e.preventDefault();
    }


    render() {
        return(
            // <div> в этом случае form заменяет общий div
                <form onSubmit={this.onFormSubmit}>
            <div className='container'>
                <input type="text"
                    placeholder="What do you want to buy today?"
                    // onChange={this.onChangeEvent} 
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.userInput}/>
            </div> 
            <div className='container'>
                <button onClick={() => this.addItem(this.state.userInput)} className='btn add'>Add</button>
            </div>
            <ul>
                {this.state.groceryList.map((item, i) => (
                    <li onClick={this.crossedWord} key={i}>
                        <img src={check} width="40px" alt="icon" />
                        {item}
                    </li>
                ))}
            </ul>
            <div className='container'>
            <button onClick={() => this.deleteItem()} className='btn delete'>Delete</button>
            </div>
            </form>
            // </div>
        )
    }
}