import React from 'react';
import { Link } from 'react-router-dom';

class Characters extends React.Component {

    state = {
        characters: []
    }

    async componentDidMount() {
        const res = await fetch('http://ghibliapi.herokuapp.com/people');
        const characters = await res.json();
        this.setState({ characters });
    }
    
    render() {
        return (
            <main className="container">
                <section className="row justify-content-center mt-4">
                    <div className="col-12">
                        <h1 className="text-cetner text-primary">Characters</h1>
                    </div>
                </section>
                <section className="row justify-content-center mt-4">
                    <div className="col-8">
                        <ul className="list-group list-group-flush">
                            {this.state.characters.map(characters => {
                                return (
                                    <li key={characters.id} className="list-group-item py-4 d-flex justify-content-between align-items-center">
                                        {characters.name}
                                        <Link to={`/characters/details/${characters.id}`} className="btn btn-link">More info</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </section>
            </main>
        )
    }
}

export default Characters;