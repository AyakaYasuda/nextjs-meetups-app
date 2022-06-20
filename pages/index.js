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

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

/*
SSR (Static Side Rendering) - running whenever the data is updated after building has been done

export const getServerSideProps = async (context) => {
  const req = context.req;
  const res = context.res;

  // fetch data from an API or a database

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
};
*/

/*
SSG (Static Site Generation) - running during the building process
*/

export const getStaticProps = async () => {
  // fetch data from an API or a database
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
    // re-generate the page on the server every 10 secs, meaning there's no need to build it every time data is updated
  };
};

export default HomePage;
