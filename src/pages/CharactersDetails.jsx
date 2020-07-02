import React from 'react'

class CharacterDetails extends React.Component {

    state = {
        characters: {}
    };

    async componentDidMount() {
        const res = await fetch('http://ghibliapi.herokuapp.com/people/' + this.props.match.params.characterid);
        const characters = await res.json();
        this.setState({ characters });
    }

    render() {
        return (
            <main className="container">
                <section className="row justify-content-center mt-4">
                    <div className="col-12">
                        <p className="text-cetner muted">{this.state.characters.name} age is {this.state.characters.age}</p>
                    </div>
                </section>
                <img style={{ width: "100%", height: "300px", objectFit: "contain" }} src="https://bit.ly/3ipIqmx" alt="Logo" />
            </main>



        );

    }
}

export default CharacterDetails;