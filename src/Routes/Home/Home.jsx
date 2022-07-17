import Directory from '../../Components/Directory/Directory';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'HTML',
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/919/919827.png',
    },
    {
      id: 2,
      title: 'CSS',
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968242.png',
    },
    {
      id: 3,
      title: 'JavaScript',
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
    },
    {
      id: 4,
      title: 'React',
      imageUrl: 'https://icons-for-free.com/download-icon-design+development+facebook+framework+mobile+react+icon-1320165723839064798_512.png',
    },
    {
      id: 5,
      title: 'Code BUNDLE',
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/51/51953.png',
    },
  ]

  return (
    <Directory categories={categories}/>
  );
}

export default Home;
