import{Pokemon} from '../../componentes/Pokemon'
import 'animate.css';
const Home = () => {
  return (
    <div>
      
      
      <h1 class="animate__animated animate__bounce">Meu site de pokemon</h1>
         <Pokemon name="pikachu" tipo="Raio" />
         <Pokemon name="Charizad" tipo ="terra"/>
         <Pokemon name=" Squirtiz" tipo ="vento"/>
         <Pokemon name=" Dito" tipo ="fogo"/>
   
         </div>
)
}

export default Home;
