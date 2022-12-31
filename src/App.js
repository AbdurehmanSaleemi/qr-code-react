import React, { Component } from 'react'
import QrReader from 'modern-react-qr-reader'
import './index.css'

class Test extends Component {
  constructor(props) {
        super(props);

        this.state = {
            result: 'No result'
        }

        this.handleError = this.handleError.bind(this);
        this.handleScan = this.handleScan.bind(this);
    }

  handleScan = data => {
    if (data) {
      this.state.result = data;
        console.log(this.state.result);
        this.setState({result: data});
    }
  }
  
  handleError = err => {
    console.error(err)
  }
  
  render() {
    return (
      <div className='main'>
        <div className='cam'>
        <QrReader
          delay={300}
          facingMode={"environment"}
          onError={this.handleError}
          onScan={this.handleScan}
        />
        </div>
        <p className='result'>{this.state.result}</p>
      </div>
    )
  }
}

export default Test
