import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Rathaus_and_Marienplatz_from_Peterskirche_-_August_2006.jpg/1200px-Rathaus_and_Marienplatz_from_Peterskirche_-_August_2006.jpg',
    address: 'Some address 1, 12345 Some city',
    description: 'This is a first meetup',
  },
  {
    id: 'm2',
    title: 'A second meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Rathaus_and_Marienplatz_from_Peterskirche_-_August_2006.jpg/1200px-Rathaus_and_Marienplatz_from_Peterskirche_-_August_2006.jpg',
    address: 'Some address 2, 12345 Some city',
    description: 'This is a second meetup',
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
