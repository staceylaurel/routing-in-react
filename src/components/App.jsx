import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Films from '../pages/Films';
import Characters from '../pages/Characters';
import CharactersDetails from '../pages/CharactersDetails';
import FilmsDetails from '../pages/FilmsDetails';
import Navbar from './Navbar';

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/films" component={Films} />
        <Route exact path="/characters" component={Characters} />
        <Route exact path="/characters/details/:characterid" component={CharactersDetails} />
        <Route exact path="/films/details/:filmsid" component={FilmsDetails} />

      </Switch>
    </BrowserRouter>
  )
}

//   componentDidMount() {
//     fetch("https://ghibliapi.herokuapp.com/films")
//       .then(res => res.json())
//       .then((data) => {
//         this.setState({ films: data })
//       });
//     fetch("https://ghibliapi.herokuapp.com/people")
//       .then(res => res.json())
//       .then((data) => {
//         this.setState({ people: data })
//       });
//   }


//   toggleFilms(e) {
//     this.setState({ filmsLoaded: true, charactersLoaded: false })
//   }
//   toggleCharacters(e) {
//     this.setState({ filmsLoaded: false, charactersLoaded: true })
//   }

//   // <Router>
//   //   <>
//   //   <Link to="/">Home</Link>
//   //   <Link to="/films">Films</Link>
//   //   <Link to="/characters">Characters</Link>
//   //   <Switch>
//   //     <Route exact path="/" component={Home} />
//   //     <Route path="/films" component={Films} />
//   //     <Route path="/characters" component={Chracters}/>
//   //   </Switch>
//   //   </>
//   // </Router>

//   render() {
//     if (this.state.filmsLoaded && !this.state.charactersLoaded) {
//       return (
//         <>
//           <img style={{ width: "100%", height: "300px", objectFit: "contain" }} src="https://live.staticflickr.com/7107/6925593220_0063772aed_b.jpg" alt="Logo" />
//           <h1 className="m-5">Films</h1>
//           <button
//             className="btn mx-3 btn-light"
//             onClick={(e) => { this.toggleFilms(e) }}>
//             Load Films
//           </button>

//           <button
//             className="btn mx-3 btn-dark"
//             onClick={(e) => { this.toggleCharacters(e) }}>
//             Load Characters
//           </button>
//           {this.state.films.map((film) => {
//             return (
//               <FilmsCard films={film} key={film.id} />
//             )
//           })}
//         </>
//       )

//     } else if (this.state.charactersLoaded && !this.state.filmsLoaded) {
//       return (
//         <>
//           <img style={{ width: "100%", height: "300px", objectFit: "contain" }} src="https://live.staticflickr.com/7107/6925593220_0063772aed_b.jpg" alt="Logo" />
//           <h1>Characters</h1>

//           <button
//             className="btn mx-3 btn-light"
//             onClick={(e) => { this.toggleFilms(e) }}>
//             Load Films
//           </button>

//           <button
//             className="btn mx-3 btn-dark"
//             onClick={(e) => { this.toggleCharacters(e) }}>
//             Load Characters
//           </button>
//           {this.state.people.map((person) => {
//             return (
//               <PersonCard person={person} key={person.id} />
//             )
//           })}
//         </>
//       )

//     } else {
//       return (
//         <>
//           <img style={{ width: "100%", height: "300px", objectFit: "contain" }} src="https://live.staticflickr.com/7107/6925593220_0063772aed_b.jpg" alt="Logo" />
//           <h1 className="d-flex justify-content-center">"Trees and people use to be good friends"</h1>
//           <button
//             className="col-md-4 ml-auto  btn mx-3 btn-light "
//             onClick={(e) => { this.toggleFilms(e) }}>
//             Load Films
//           </button>

//           <button
//             className=" col-md-4 ml-auto mx-3  btn btn-dark "
//             onClick={(e) => { this.toggleCharacters(e) }}>
//             Load Characters
//           </button>
//         </>
//       )
//     }

//   }
// }
export default App;
