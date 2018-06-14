import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

export default class GetPresidentsUi extends Component {

  constructor(props) {
    super(props)

    this.state = {
       getPresidents: false,
    }
  }

  render() {
    return (
      this.state.getPresidents ?
      (<div>
        <h2>Remember to vote in the midterms</h2>
        <Button onClick={() => (this.props.buttonHandler('ascending'))}>Sort By Name Ascending</Button>
        <Button onClick={() => (this.props.buttonHandler('descending'))}>Sort By Name Descending</Button>
        <Button onClick={this.props.buttonHandler}>Sort by Order Elected</Button>
      </div>)
      : <Button
        style={{ fontSize: '3em'}}
        onClick={() => {
        this.props.buttonHandler()
        this.setState({getPresidents: true})
      }}>Click Here To Learn About Your Presidents
      </Button>
    )
  }
}
