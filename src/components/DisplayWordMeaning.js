import React from 'react';

export default class DisplayWordMeaning extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notFound: props.found,
            word: props.word,
            meanings: props.meanings,
            phonetics: props.phonetics,
        };
        console.log(this.props.word)
    }
    componentDidMount() {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.volume = 0.1;
        audioEl.play()
    }
    render() {
        if (!this.state.notFound) {

            return <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 wordDisplayBlock">
                        <div className="row col-md-12 wordDisplayTitle">

                            <b style={{ color: '#2ecc71', fontSize: 'x-large' }}>{this.state.word}</b>

                        </div>
                        <div className="row col-md-12 wordDisplayMeaning">
                            <div className="row col-md-12">

                                <audio className="audio-element" autoPlay="" muted="">
                                    <source src={this.state.phonetics.audio} ></source>
                                </audio>
                                <b>Phonetics:  </b>{this.state.phonetics.audio}

                            </div>
                            <div className="row col-md-12">

                                <b>Part Of Speech:</b> {this.state.meanings.partOfSpeech}

                            </div>
                            <div className="row col-md-12">

                                <b>Meaning:</b> {this.state.meanings.definitions[0].definition}

                            </div>
                            <div className="row col-md-12" style={{ display: (this.state.meanings.definitions[0].example) ? 'inline-block' : 'none' }}>
                               
                                <b>Example:</b> {this.state.meanings.definitions[0].example}
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        } else {

            return <div>
                Not Found
            </div>;
        }
    }
}