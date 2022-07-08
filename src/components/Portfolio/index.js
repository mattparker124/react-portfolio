import React from 'react';
import Slider from '../Slider';

const slideData = [
    {
      index: 0,
      headline: 'Budget Tracker',
      paragraph: 'An online and offline budget tracking app to help you manage funds on-the-go from anywhere, even without an internet connection, all packaged into a simple PWA that can be installed straight onto your desktop or phone!',
      button: 'Start Budgeting!',
      location: 'https://pacific-island-20775.herokuapp.com/',
      src: '/react-portfolio/slides/budget.png'
    },
    {
      index: 1,
      headline: 'Codewire',
      paragraph: 'A social networking app utuilizing NoSQL to allow developers to make an account and discuss various development-related topics.',
      button: 'Get Started!',
      location: 'https://codewireapp.herokuapp.com/',
      src: '/react-portfolio/slides/codewire.png'
    },
    {
      index: 2,
      headline: 'Work-Day Scheduler',
      paragraph: 'Plan out your work-day in realtime in this app that remembers your schedule and tracks it throughout the day.',
      button: 'Get Focused!',
      location: 'https://mattparker124.github.io/work-day-scheduler/',
      src: '/react-portfolio/slides/work-day.png'
    },
    {
      index: 3,
      headline: 'Run Buddy',
      paragraph: 'Run Buddy was my first project in HTML and CSS, setting up a basic website using the fundamentals of front-end development.',
      button: `Let's Run!`,
      location: 'https://mattparker124.github.io/run-buddy/',
      src: '/react-portfolio/slides/run-buddy.png'
    }
]

function Portfolio() {
    return (
        <section>
            <Slider heading="Projects" slides={slideData} />
        </section>
    );
}

export default Portfolio;