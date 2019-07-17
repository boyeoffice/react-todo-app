import React from 'react';
import { render } from 'react-dom';
import {Todo} from './components/Todo'

class App extends React.Component {
	constructor(props){
			super(props);
			this.state = {
				list: [
					{
						'todo': 'Clean the house'
					},
					{
						'todo': 'Buy milk'
					}
				],
				todo: 'This is todo',
				title: 'react to do'
		  }
		}
		handleKeyPress(event){
			if(event.target.value !== ''){
				if(event.key === 'Enter'){
					this.createNewToDoItem()
				}
			}
		}
		handleInput(event){
			console.log(event.target.value)
			this.setState({
				todo: event.target.value
			})
		}

		createNewToDoItem(){
			console.log(this.state.todo)
			this.setState(({list, todo}) => ({
				list:[
					...list,
					{
						todo
					}
				],
				todo: ''
			}))
		}

		deleteItem(indexToDelete){
			console.log(indexToDelete)
			this.setState(({list}) => ({
				list: list.filter((toDo, index) => index !== indexToDelete)
			}))
		}
	render() {
		return (
			<div className="container">
				<div className="row mt-5">
					<div className="col-6 offset-3">
						<h2 className="title text-center text-uppercase">
							{this.state.title}
						</h2>
						{this.state.list.map((item, key) => {
							return <Todo 
													key={key}
													item={item.todo}
													deleteItem={this.deleteItem.bind(this, key)}
													/>
						})}
						
						<input type="text"
									value={this.state.todo} 
									onChange={(event) => this.handleInput(event)}
									onKeyPress={(event) => this.handleKeyPress(event)}
									className="form-control input-sm mb-3"
									placeholder="Type new item here"/>
						<button className="btn btn-block btn-primary" onClick={() => this.createNewToDoItem()}>Add</button>
					</div>
				</div>
			</div>
			);
	}
}
	render(<App/>, window.document.getElementById("app")); 

