import React from 'react'

class FilmsDetails extends React.Component {

    state = {
        films: {}
    };

    async componentDidMount() {
        const res = await fetch('http://ghibliapi.herokuapp.com/films/' + this.props.match.params.filmsid);
        const films = await res.json();
        this.setState({ films });
    }

    render() {
        return (
            <main className="container">
                <section className="row justify-content-center mt-4">
                    <div className="col-12">
                        <p className="text-cetner text-muted w-2 text-sm-left">Plot: {this.state.films.description}</p>
                    </div>
                </section>
                <img style={{ width: "100%", height: "300px", objectFit: "contain" }} src="https://bit.ly/3dWeaMq" alt="Logo" />
            </main>

        );

    }
}

export default FilmsDetails;