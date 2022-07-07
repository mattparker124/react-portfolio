import React from 'react';
import Slider from '../Slider';

const slideData = [
    {
      index: 0,
      headline: 'New Fashion Apparel',
      button: 'Shop now',
      location: 'https://github.com/mattparker124/react-portfolio',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg'
    },
    {
      index: 1,
      headline: 'In The Wilderness',
      button: 'Book travel',
      location: 'https://github.com/mattparker124/react-portfolio',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg'
    },
    {
      index: 2,
      headline: 'For Your Current Mood',
      button: 'Listen',
      location: 'https://github.com/mattparker124/react-portfolio',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg'
    },
    {
      index: 3,
      headline: 'Focus On The Writing',
      button: 'Get Focused',
      location: 'https://github.com/mattparker124/react-portfolio',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg'
    }
]

function Portfolio() {
    return (
        <section>
            <Slider heading="Example Slider" slides={slideData} />
        </section>
    );
}

export default Portfolio;