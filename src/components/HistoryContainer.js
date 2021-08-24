import React from 'react';
import HistoryWord from './HistoryWord';
class HistoryContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sortOrder: 'recent'
        }
    }
    clickHandler = (e) => {
        this.setState({
            sortOrder: e.target.value
        })
    }
    render() {
        if (localStorage.getItem('wordArray') == null) {

            return <div class="HistoryContainerClass" style={{ padding: '10% 30%' }}>

                <span className="textTitle" style={{ fontSize: 'x-large', float: 'left', backgroundColor: '#2ecc71', color: 'white', display: 'block', borderRadius: '5px', textAlign: 'justify', backgroundColor: '#2ecc71', display: 'block', borderRadius: '15px', padding: '4% 7%',textShadow:'-1px -1px 0px white, 1px 1px 0px black' }}>
                   
                    No history record at the moment 😪

                </span>
            </div>;

        } else {

            if (this.state.sortOrder == 'recent') {
                console.log("recent")
                return <div className="HistoryContainerClass">
                    <div style={{ backgroundColor: '#2ecc71', display: 'block', borderRadius: '15px', paddingBottom: '2%',margin:'3% 2%' }} >

                        <div className="titleHistoryDisplay">
                            <span className="textTitle" style={{ fontSize: 'x-large', float: 'left',textShadow:'-1px -1px 0px white, 1px 1px 0px black' }}>History Records:</span>

                            <select id="sortOrderSelected" onChange={this.clickHandler} className="selectStyle">
                                <option value="recent">Recent</option>
                                <option value="ascending">Ascending</option>
                                <option value="descending">Descending</option>
                            </select>

                        </div><br /><br />

                        <div className=" bodyHistoryDisplay d-flex flex-wrap align-content-start" >
                            {localStorage.getItem('wordArray').split("$").map((elem, index) =>
                                <HistoryWord all={elem} />
                            )}
                        </div>
                    </div>
                </div>
            } else if (this.state.sortOrder == 'ascending') {
                console.log("asce")
                return <div class="HistoryContainerClass" >
                    <div style={{ backgroundColor: '#2ecc71', display: 'block', borderRadius: '15px' ,margin:'3% 2%' }} >
                        <div className="titleHistoryDisplay">
                            <span className="textTitle" style={{ fontSize: 'x-large', float: 'left', textShadow:'-1px -1px 0px white, 1px 1px 0px black' }}>History Records:</span>
                            <select id="sortOrderSelected" onChange={this.clickHandler} className="selectStyle">
                                <option value="recent">Recent</option>
                                <option value="ascending">Ascending</option>
                                <option value="descending">Descending</option>
                            </select>
                        </div><br /><br />
                        <div className=" bodyHistoryDisplay d-flex flex-wrap align-content-start" >
                            {localStorage.getItem('wordArray').split("$").sort().map((elem) =>
                                <HistoryWord all={elem} />
                            )}
                        </div>
                    </div>
                </div>
            } else {
                console.log("dwesc")
                return <div class="HistoryContainerClass">
                    <div style={{ backgroundColor: '#2ecc71', display: 'block', borderRadius: '15px',margin:'3% 2%' }}  >
                        <div className="titleHistoryDisplay">
                            <span className="textTitle" style={{ fontSize: 'x-large', float: 'left', textShadow:'-1px -1px 0px white, 1px 1px 0px black' }}>History Records:</span>
                            <select id="sortOrderSelected" onChange={this.clickHandler} className="selectStyle">
                                <option value="recent">Recent</option>
                                <option value="ascending">Ascending</option>
                                <option value="descending">Descending</option>
                            </select>
                        </div><br /><br />
                        <div className="bodyHistoryDisplay d-flex flex-wrap align-content-start" style={{ overflowBlock: 'auto' }}>
                            {localStorage.getItem('wordArray').split("$").sort().reverse().map((elem) =>
                                <HistoryWord all={elem} />
                            )}
                        </div>
                    </div>
                </div>
            }
        }
    }
}
export default HistoryContainer;
