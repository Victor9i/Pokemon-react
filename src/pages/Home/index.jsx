import{Pokemon} from '../../componentes/Pokemon'
import 'animate.css';
 
import PokemonLogo from '../../assets/imagens/pokemon.png'
import './style.css'


export const Home = () => {
  return (
    <div className='container'>
        <img className='imageLogo' src={PokemonLogo} alt="Pokemon Logo" />
         <Pokemon name="pikachu" tipo="Raio" />
          <Pokemon name="Charizad" tipo ="terra"/>
         <Pokemon name=" Squirtiz" tipo ="vento"/>
         <Pokemon name=" Dito" tipo ="fogo"/>
   
         </div>
)
}

export default Home;
