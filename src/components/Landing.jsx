import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import '../styles/styles.sass';

function Landing() {

    const [randomImage, setRandomImage] = useState('')


    const imageUrl = useRef()
    useEffect(()=>{
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then((res)=>{
        let data = res.data.message
      
        console.log(data)
        const imageUrl = res.data.message
    })
    .catch((err)=>{
        console.log(err)
    })
}, '')
// setRandomImage = <img src={{randomImage}} width="500px" height="500px"/>

  return (   
    <div className="background">
    <h1>Landing Page</h1>
    <Link to="/maps"><p>Landing</p></Link>
    {/* <div className="image-container">{randomImage}</div> */}
    <img src= "https://images.dog.ceo/breeds/pug/n02110958_13439.jpg" width="100px" height="100px" alt='image of dog'></img>
    <Button/>
    </div>




  )
}

export default Landing