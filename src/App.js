import logo from './logo.svg';
import './App.css';
import TinderCard from 'react-tinder-card'
import styled from 'styled-components';

function App() {
  const Main = styled.div`
  .card{
    
    margin-left: auto;
    margin-right: auto;
    background-color: yellow;
    
    background-size: 100% 100%;
    
    p{
      z-index:1;
    }
  }
  `
  return (
    <div className="App">
      <Main>
     <TinderCard className='card' preventSwipe={['up','down']} flickOnSwipe={true} style={{backgroundImage:'url(https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI)'}} onSwipe={(dir)=>{
       console.log(dir)
      }}>
       <img src="https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI" alt="" />
       <p>hello</p>
     </TinderCard>
       </Main>
    </div>
  );
}

export default App;
