import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import './Word.css'
class HistoryWord extends React.Component {
    render() {
        if (!this.props.all) {
            return <div></div>
        } else {
            const w1 = this.props.all.split(":");
            
            return <div className="FlipBlock p-2 wordDisplayBlock" style={{ backgroundColor: '#2ecc71', textAlign: 'left' }}>

                <Flippy flipOnHover={true} flipDirection="vertical" ref={(r) => this.flippy = r}
                    style={{ width: '800px', height: '80px', padding: '0.5rem', backgroundColor: 'white' }}   >

                    <FrontSide className="FlipFront " style={{ textAligh: 'left', color: 'white' }}>

                        <span style={{ color: 'black', fontSize: 'large', textAlign: 'left' }}>
                            
                            <b><i>{w1[0]}</i></b>

                        </span>
                    </FrontSide>

                    <BackSide className="FlipBack" style={{ backgroundColor: '#2ecc71', color: 'black' }}>

                        <span><b><i>{w1[0]}</i></b> </span>
                        <span><i>{w1[1]}</i></span>

                    </BackSide>
                </Flippy>
            </div>;
        }
    }
}
export default HistoryWord;