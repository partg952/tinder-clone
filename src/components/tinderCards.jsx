import TinderCard from 'react-tinder-card'
import styled from 'styled-components';
import axios from 'axios'

import {useEffect, useMemo, useState,useRef} from 'react'
function TinderCards() {
    const ref = useRef();
  const [data,
    setData] = useState([
    {
      name: 'Elon Musk',
      image: 'https://static.dezeen.com/uploads/2021/06/elon-musk-architect_dezeen_1704_col_0.' +
          'jpg'
    }, {
      name: 'Sundar Pichai',
      image: 'https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg'
    }, {
      name: 'Jack Dorsey',
      image: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/http' +
          's%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d8aca3e6de3150009a505c1%' +
          '2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D114%26cropX2%3D2537%26cropY1%3D240%26' +
          'cropY2%3D2662'
    }, {
      name: 'Ellen Degeneres',
      image: 'https://www.biography.com/.image/t_share/MTgwMzE3ODExMjc5NjY5MTAw/gettyimages-10' +
          '52566600.jpg'
    }, {
      name: 'Barack Obama',
      image: 'https://ca-times.brightspotcdn.com/dims4/default/bec99d7/2147483647/strip/true/c' +
          'rop/2000x2706+0+0/resize/840x1137!/quality/90/?url=https%3A%2F%2Fcalifornia-time' +
          's-brightspot.s3.amazonaws.com%2Fff%2F2c%2Fdedf568e4af087cab5f0a5c76f32%2Fla-ca-b' +
          'k-a-promised-land-barack-obama-183.JPG'
    }, {
      name: 'Kevin Hart',
      image: 'https://downloads.ctfassets.net/4cd45et68cgf/r56yR3LvPT4Ya54p82P7V/442211fad6b08fba4a1b5f32209a5d1a/Kevin_Hart_Headshot_-_Kevin_Kwan_-_High_Res_.JPG'
    }, {
      name: 'Bill Gates',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%2' +
          '9.jpg'
    },{
        name:'Mark Zuckerberg',
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/1200px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg'
    },{
        name:'Jeff Bezos',
        image:'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D524%26cropX2%3D1824%26cropY1%3D185%26cropY2%3D1486'
    },{
        name:'Satya Nadella',
        image:'https://content.fortune.com/wp-content/uploads/2020/02/CNV.03.20.Satya-Nadella.jpg'
    },{
        name:'Linus Torvalds',
        image:'https://upload.wikimedia.org/wikipedia/commons/0/01/LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg'
    },{
        name:'Indira Nooi',
        image:'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fdanschawbel%2Ffiles%2F2017%2F11%2FIndra-Nooyi.jpg'
    },{
        name:'Tim Cook',
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Tim_Cook_%282017%2C_cropped%29.jpg/1200px-Tim_Cook_%282017%2C_cropped%29.jpg'
    }
  ])
  console.log(data)

  const Main = styled.div `
  box-shadow:0px 0px 5px 0px black;
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
    h3  {
        position: absolute;
        bottom: 0;
        margin: 10px;
    }
    
}
`
  
  
  return (
    <div>
        
        
      <Main>
    
        {data.map((items) => (
          <TinderCard
            ref={ref}
            className='card'
            preventSwipe={['up', 'down']}
            key={items.name}
            flickOnSwipe={true}>
            <img src={items.image} alt=""/>
            <h3>
              {items.name}
            </h3>
          </TinderCard>
        ))
}

      </Main>
    </div>
  );
}

export default TinderCards;
