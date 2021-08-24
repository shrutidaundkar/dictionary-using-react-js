import React from 'react';
import DisplayWordMeaning from './DisplayWordMeaning';
class SearchWord extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isSearched: false,
            word: 'hello',
            meanings: [],
            phonetics: [],
            keyword: 'hello',
            notFound: false,
            validSearchArray: []
        };
    }
    updateWord = (e) => {
        e.preventDefault()
        this.setState({
            word: e.target.value,
            keyword: e.target.value,
            isSearched: false
        })
    }
    wordSearched = (e) => {
        e.preventDefault()
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${this.state.keyword}`)
            .then((response) => {
                response.json().then((result) => {
                    if (result["title"] != undefined) {
                        console.log(result)
                        this.setState({
                            notFound: true
                        })
                    } else {
                        this.setState({
                            isSearched: true,
                            word: result[0]["word"],
                            meanings: result[0]["meanings"],
                            phonetics: result[0]["phonetics"],
                            notFound: false
                        })
                        console.log(localStorage.getItem('wordArray'))
                        if (localStorage.getItem('wordArray') == null) {
                            localStorage.setItem('wordArray', this.state.word + ":" + this.state.meanings[0].definitions[0].definition + "$");
                        } else {
                            localStorage.setItem('wordArray', (localStorage.getItem('wordArray')) + this.state.word + ":" + this.state.meanings[0].definitions[0].definition + "$");
                        }
                        console.log(localStorage.getItem('wordArray'))
                    }
                })
            }).catch((err) => {
                this.setState({
                    notFound: true
                })
            });
    }
    render() {

        if (!this.state.isSearched && !this.state.notFound) {
            return <div className="SearchWordContainer">
                <div style={{ backgroundColor: '#2ecc71', display: 'block', borderRadius: '15px' }} id="SearchWordBlock">
                    <input type="text" autoFocus={true}  onChange={this.updateWord} 
                    style={{textShadow: '-1px -1px 0px black',fontSize: 'x-large',fontWeight:'bold',color:'#2ecc71'}}></input>
                    <button type="button" className="btn btn-block" onClick={this.wordSearched}
                    style={{textShadow: '-1px -1px 0px white, 1px 1px 0px black',fontSize: 'x-large'}}
                    >SEARCH&#128269;</button>

                </div>
            </div>;
        } else if (!this.state.isSearched && this.state.notFound) {
            return <div className="SearchWordContainer">
                <div style={{ backgroundColor: '#2ecc71', display: 'block', borderRadius: '15px' }} id="SearchWordBlock">
                    <input type="text" autoFocus={true}  onChange={this.updateWord}
                     style={{textShadow: '-1px -1px 0px black',fontSize: 'x-large',fontWeight:'bold',color:'#2ecc71'}} ></input>
                    <button type="button" className="btn btn-block" onClick={this.wordSearched}>SEARCH&#128269;</button>
                    <span className="TitleContainer" style={{ fontSize: 'small', color: 'red' }}>Couldn't find anything. Please try again :(</span>
                </div>
            </div >;
        }
        else {
            return <div className="SearchWordContainer">
                <div style={{ backgroundColor: '#2ecc71', display: 'block', borderRadius: '15px' }} id="SearchWordBlock">
                    <div>
                        <input type="text" value={this.state.keyword} onChange={this.updateWord}
                         style={{textShadow: '-1px -1px 0px black',fontSize: 'x-large',fontWeight:'bold',color:'#2ecc71'}} ></input>
                        
                        <button type="button" className="btn" onClick={this.wordSearched}>SEARCH&#128269;</button>
                    </div>
                    <div>
                        <DisplayWordMeaning word={this.state.word}
                            meanings={this.state.meanings[0]} phonetics={this.state.phonetics[0]} />
                    </div>
                </div>

            </div>;
        }
    }
}
export default SearchWord;