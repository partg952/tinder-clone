

import TinderCard from 'react-tinder-card'
import styled from 'styled-components';
import axios from 'axios'
import {useEffect,useState} from 'react'
function TinderCards() {
  const [data,setData] = useState([])
  console.log(data)
  useEffect(()=>{
    const GetData = async() =>{
      const result = await axios('https://randomuser.me/api/?results=100')
      console.log(result.data)
      setData(result.data.results)
    }
    GetData();
  },[])
  const Main = styled.div`
  .card{
    margin-top: 50px;
    border-radius:10px ;
    overflow: hidden;
    width: 300px;
    height: 400px;
    margin-left: auto;
    margin-right: auto;
    background-color: transparent;
    position: absolute;
    left: 0;
    right: 0;
    color: white;
    text-align: left;
    img{
      position: absolute;
      height: 100%;
      width: 100%;
      object-fit: fill;
      left: 0;
      /* z-index: -1; */
    }
    p{
      position: absolute;
      bottom: 0;
      margin: 10px;
    }
  }
  `
  return (
    <div>
      <Main>
     <TinderCard className='card' preventSwipe={['up','down']} flickOnSwipe={true} onSwipe={(dir)=>{
       console.log(dir)
      }}>
       <img src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D524%26cropX2%3D1824%26cropY1%3D185%26cropY2%3D1486" alt="" />
       <p>Jeff Bezos</p>
     </TinderCard>
     {
       data.map((items)=>(
         <TinderCard  className='card' preventSwipe={['up','down']} key={items.login.salt} flickOnSwipe={true} onSwipe={(dir)=>{
          console.log(dir)
         }}>
           <img src={items.picture.large} alt="" />
           <p> {items.name.first} </p>
         </TinderCard>
       ))
     }
       </Main>
    </div>
  );
}

export default TinderCards;
