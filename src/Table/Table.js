import React, {Component} from 'react';
import TableHeadRow from './TableHeadRow';
import TableBodyRow from './TableBodyRow';
import '../Table/Table.scss'

class Table extends Component {
    state = {
        data: [
            {id: 1, time: '08:34', moveCount: 1},
            {id: 2, time: '10:19', moveCount: 19},
            {id: 3, time: '11:27', moveCount: 29},
            ],
        colNames: [
            {name: 'Номер', isActive: false},
            {name: 'Имя', isActive: false},
            {name: 'Счет', isActive: false}
            ],
        dataCopy: []
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.props.playerGameInfo !== prevProps.playerGameInfo) {
            if (prevState.data.findIndex(item => item.id === 0) === -1) {
                prevState.data.push(this.props.playerGameInfo)
                this.setState({
                    data: prevState.data
                })
            } else {
                let currentIndex = prevState.data.findIndex(item => item.id === 0);
                prevState.data[currentIndex].time = this.props.playerGameInfo.time;
                prevState.data[currentIndex].moveCount = this.props.playerGameInfo.moveCount;
                this.setState({
                    data: prevState.data
                })
            }
            let player = {
                id: this.state.data.length,
                time: this.props.playerGameInfo.time,
                moveCount: this.props.playerGameInfo.moveCount,
            }
            sessionStorage[this.state.data.length] = JSON.stringify(player);
            this.tableSortHandler()
        }
    }

    componentDidMount() {
        if (sessionStorage.length !== 0) {
            for (let i = 0; i < sessionStorage.length; i++) {
                let key = sessionStorage.key(i);
                this.state.data.push(JSON.parse(sessionStorage[key]));
              }
        }
        this.tableSortHandler()
        this.setState({
            dataCopy: this.state.data
        })
    }

    compareFunction(a, b) {
    if (a < b)
        return -1 
    if (a > b)
        return 1
    return 0
    }

    tableSortHandler() {
        let newArr = [];
        this.state.data.map(e => {
            newArr.push(e);
        })
        newArr.sort(function(a, b) {
            let nameA = a['moveCount'], nameB=b['moveCount']
            return this.compareFunction(nameA, nameB, 'more')
        }.bind(this))

        this.setState({
            data: newArr
        })
    }

    render() {
        const tableHeadRowClassNames = {
            theadClassName: 'table-head',
            trClassName: 'table-head-row',
            thClassName: 'table-head-row_cell'
        }
        const tableBodyRowClassNames = {
            tbodyClassName: ['table-body'],
            trClassName: ['table-body-row'],
            tdClassName: ['table-body-row_cell']
        }
        return(
            <React.Fragment>
                <table className='table'>
                    <TableHeadRow 
                        name={this.state.colNames}
                        ClassNames={tableHeadRowClassNames}
                        changeActive={this.changeActiveHandler}
                    />

                    <tbody className={tableBodyRowClassNames.tbodyClassName}>
                        { 
                            this.state.data.map((element, index) => <TableBodyRow 
                                ClassNames={tableBodyRowClassNames}
                                row={element} 
                                key={index}
                            />)
                        }
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

export default Table