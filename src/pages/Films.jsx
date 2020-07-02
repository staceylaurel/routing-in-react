import React from "react";
import { Link } from 'react-router-dom';

class Films extends React.Component {

    state = {
        films: []
    };

    async componentDidMount() {
        const res = await fetch('http://ghibliapi.herokuapp.com/films');
        const films = await res.json();
        this.setState({ films });
    }

    render() {
        return (
            <main className="container">
                <section className="row justify-content-center mt-4">
                    <div className="col-12">
                        <h1 className="text-cetner text-primary">Films Page</h1>
                    </div>
                </section>
                <section className="row justify-content-center mt-4">
                    <div className="col-8">
                        <ul className="list-group list-group-flush">
                            {this.state.films.map(films => {
                                return (
                                    <li key={films.id} className="list-group-item py-4 d-flex justify-content-between align-items-center">
                                        {films.title}
                                        <Link to={`/films/details/${films.id}`} className="btn btn-link">More info</Link>
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

export default Films;