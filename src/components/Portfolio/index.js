import p1 from '../../../public/port1.png';
import p2 from '../../../public/port2.png';
import p3 from '../../../public/port3.png';

const myWebpages = [
  {
    id: 1,
    image: p1,
    title: 'Sorting Algorithm Visualizer',
    desc: 'This was a team project that used JQuery to style the DOM for each algorithm. The idea was to create a way for students to visualize what was happing inside of these algorithms. This project took a deep understanding of how each algorightm worked, to perfectly pair the styles to each algorithm to effectively show what was happening inside.',
    github: 'https://github.com/ryan-spencer1220/sorting-algorithm-visualizer',
    demo: 'visualizer-algorithm-axfo.vercel.app'
  },
  {
    id: 2,
    image: p2,
    title: 'Card Memory Game',
    desc: 'This project was built with React using CSS BEM method. Cards are randomly generated on each new game and the user must match card pairs to win. The total turns it takes are calculated for the user so they can try to go for their best. This project was something fun to create and served as a way for me to practice styling with BEM',
    github: 'https://github.com/Ultra-Zactimus/react-memory-game',
    demo: 'https://react-memory-game-5h1b.vercel.app/'
  },
  {
    id: 3,
    image: p3,
    title: 'Internet Movie Database',
    desc: 'This project was built with C# and MySQL on the .NET Core Framework using the MVC model. My classmates and I were trying to create a webpage where the community could add their own films to a database. Users would then be able to query the site by Director, Actor, Composer or Movie Name to find out info about what other projects people worked on.',
    github: 'https://github.com/Ultra-Zactimus/Filmography',
    demo: 'https://github.com/Ultra-Zactimus/Filmography'
  }
];

export default myWebpages;