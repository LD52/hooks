import './App.css';
import Search from './search.png'; 
import Profile from './firstprofile.jpg';
import Profile2 from './Profile2.jpg';
import Profile3 from './Profile3.jpg';
import Profile4 from './Profile4.jpg';
import Profile5 from './Profile5.jpg';
import Profile6 from './Profile6.jpg';
import {Component} from 'react';
import Card from './Card.jsx';



class App extends Component{
state = {
  SearchTerm : '', 
}
  state = {
  movie : [
    {
    id : 1, 
    title : "ASMR | Dormez bien je gères",
    author: "Tom",
    video:<iframe className="movie" src="https://www.youtube.com/embed/mZy5jtCNBYU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    profile : <img src={Profile} className="profile" alt="art"/> ,
    date : " 208 k vues . il y a 4 mois"
   },
   {
  id : 2,
  title : "Le vicking - complet en français",
  author: "Boxoffice", 
  video : <iframe className='movie' src="https://www.youtube.com/embed/P-fHBPM0cEo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
  profile : <img src={Profile2} alt="voir" className="profile" />,
  date : "90 k vues . il y a 2 semaines"
},
   {
  id:3,
  title: "Drôle de Jumeaux | Film ",
  author :"the lion king", 
  video :<iframe class="movie" src="https://www.youtube.com/embed/3wcB0pjxa5k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
  profile : <img src={Profile6} alt="art" className="profile"/>, 
  date : "902 k vues . il y a 1 an"
     },
   {
    id : 4,
    title: "Tout n'est que illusion | film",
    author : "Eric Ezra",
    video : <iframe className='movie' src="https://www.youtube.com/embed/0RpYYm6txqk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    profile : <img src={Profile4} alt="art" className='profile'/>,
    date : "20 k vues . il y a 2 semaines"
   },
   {
    id: 5,
    title : "Ratatouille en français", 
  video : <iframe className="movie" src="https://www.youtube.com/embed/TjAW2UqhEjA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
  profile : <img src={Profile5} alt="art" className="profile"/>,
    author : "Only Mcqueen",
    date : "1 Md vues . il y a 3 ans"
   }, 
   {
    id : 6,
    title:"Elle n'a jamais su qu'elle se...",                                   
    video : <iframe  className="movie"  src="https://www.youtube.com/embed/n5QZrhrA_GY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    profile: <img src ={Profile3} alt="art" className="profile"/>,
    author: "Nollywood TV",
    date : "90 k vues . il y a 1 an"
   },
   {
    id : 7, 
    title: "La vie de Jack | drame, peur",
    video : <iframe className="movie" src="https://www.youtube.com/embed/3ZIOue8-We4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    author : "Only Mcqueen",
    profile : <img src={Profile5} alt="art" className="profile"/>,
    date : "254 086 vues . 16 août 2022"
   },
   {
    id : 8, 
    title: "Nés pour danser",
    video :<iframe className="movie" src="https://www.youtube.com/embed/NXfmLEquzwQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    author : "Boxoffice",
    profile : <img src={Profile2} alt="art" className="profile"/>,
    date : "3 M de vues . il y a 4 ans"
   },
   {
    id : 9, 
    title: "One Love | Film complet HD",
    video : <iframe className="movie" src="https://www.youtube.com/embed/Fx307FHMHTk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    author : "My digital Channel",
    profile : <img src={Profile5} alt="art" className="profile"/>,
    date : "1,1 M vues . il y a 1 an"
   }
  ], 
searchTerm: '',
  }

 handleSearch = (e) => {
    this.setState.searchTerm(e.target.value);
  }
} 
 render() { 
   return (
    <div className="App">
      <div className="top">
        <form>
          <input placeholder="Rechercher" type="search" className="space"/>
        </form> 
      <div className="box-pic">
        <img src={Search} alt="pic" className="pic"/>
      </div>
      </div>
    <div className="global">
    {films.filter((film) => {
              return  film.title.toLowerCase().includes(this.state.searchTerm)
              }).map((film)=> {
              return (<Card key={film.id} film={film}/>)
            })}
      </div>

    </div>
)
 }
  
export default App;
