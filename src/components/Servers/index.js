import React, {Component} from 'react';
import {connect} from 'react-redux';

import {url, apiGetList} from '../../config/data';

import Table, {
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from 'material-ui/Table';
import Tooltip from 'material-ui/Tooltip';
import Paper from 'material-ui/Paper';

class Servers extends Component {
  constructor(props) {
    super(props);
    this.getList = this.getList.bind(this);

    this.state = {
      list: []
    }
  }

  getList() {
    const list = this.state.list;

    const columnData = [
      { id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)' },
      { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
      { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
      { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
      { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
    ];

    if (list.length) {
      const listItems = list.map( (column, i) => {
        console.log(column)
        return (
          <Paper>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell key={i}>{column.nessusHost}</TableCell>
                  <TableCell key={i}>{column.nessusPort}</TableCell>
                  <TableCell key={i}>{column.nessusCertificatePath}</TableCell>
                  <TableCell key={i}>{column.nessusId}</TableCell>
                  <TableCell key={i}>{column.nessusLocationId}</TableCell>
                  <TableCell key={i}>{column.nessusPassword}</TableCell>
                  <TableCell key={i}>{column.nessusScanningCapacity}</TableCell>
                  <TableCell key={i}>{column.scannerType}</TableCell>
                  <TableCell key={i}>{column.forLocalIp}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        );
      })


      return (
        <div>
          {listItems}
        </div>
      );
    }
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    return fetch(url + apiGetList, {
      method: 'get',
      headers: {
        'Accept-Encoding': 'gzip,deflate',
        token
      }
    })
      .then(result => {
        return result.json();
      }).then(data => {
        this.setState({
          list: [...data]
        })
        return data;
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="Servers">
        {this.getList()}
      </div>
    );
  }
};

const mapStateToProps = store => {
  return {
    page: store.page,
    auth: store.auth,
    store: store
  }
};

const ListItem = (props) => {
  return <li>...</li>

}

export default connect(mapStateToProps)(Servers);

{/*<div key={item.toString()}>{item.forLocalIp}</div>*/
}
{/*<div key={item.toString()}>{item.nessusCertificatePath}</div>*/
}
{/*<div key={item.toString()}>{item.nessusHost}</div>*/
}
{/*<div key={item.toString()}>{item.nessusId}</div>*/
}
{/*<div key={item.toString()}>{item.nessusLocationId}</div>*/
}
{/*<div key={item.toString()}>{item.nessusLogin}</div>*/
}
{/*<div key={item.toString()}>{item.nessusPassword}</div>*/
}
{/*<div key={item.toString()}>{item.nessusPort}</div>*/
}
{/*<div key={item.toString()}>{item.nessusScanningCapacity}</div>*/
}
{/*<div key={item.toString()}>{item.scannerType}</div>*/
}