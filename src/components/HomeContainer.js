import React from 'react';
class HomeContainer extends React.Component {
    render() {
        return <div className="HomeContainer" style={{ padding: '10% 10%' }} >

            <br/>
            <div style={{ backgroundColor: '#2ecc71', display: 'block', borderRadius: '15px', padding: '4% 1%',fontWeight:'bold' }}>

                <span className="textTitleQuote">
                    The more words you know, the more clearly and powerfully you will think... and the more ideas you will invite into your min.
                    <br />
                </span>

            </div><br/><br/>

            <div style={{ borderRadius: '15px', padding: '1% 1%' }}>

                <p>
                    <b><i style={{ backgroundColor: '#2ecc71', fontSize: 'x-large' }}>
                        -Wilfred Funk
                    </i></b>
                </p>
            </div>
        </div>;
    }
}

export default HomeContainer;