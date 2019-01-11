import React, { Component } from 'react';
import ReactTable from 'react-table'
import "react-table/react-table.css";

import axios from 'axios';

const columns = [
  {
    Header: 'ID',
    accessor: 'id' // String-based value accessors!
  },
  {
    Header: 'Name',
    accessor: 'name' // String-based value accessors!
  }, {
    Header: 'Status',
    accessor: 'status',
    Cell: props => props.value ? 'Success' : 'Error'
  }
];

class App extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    setInterval(() => {
      axios.get('http://localhost:3001/loggs').then(res => {
        this.setState({
          data: res.data
        })
      })
    }, 500);
  }

  render() {
    return <ReactTable
      data={this.state.data}
      columns={columns}
    />
  }
}

export default App;
