import React from 'react'
import { render } from 'react-dom'

export class Todo extends React.Component {
	render(){
		return(
					<div className="col-12">
						<div className="row">
							<div className="col-9 mb-3">
						  	{this.props.item}
						  </div>
							<div className="col-3 mb-3">
								<button onClick={this.props.deleteItem} className="btn btn-sm btn-danger">&times;</button>
							</div>
						</div>
				  </div>
			)
	}
}