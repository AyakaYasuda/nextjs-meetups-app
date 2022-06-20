import MeetupDetail from '../../components/meetups/MeetupDetail';

const meetupDetails = () => {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Rathaus_and_Marienplatz_from_Peterskirche_-_August_2006.jpg/1200px-Rathaus_and_Marienplatz_from_Peterskirche_-_August_2006.jpg"
      title="A first meetup"
      address="Some address 1, 12345 Some city"
      description="The a first meetup"
    />
  );
};

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [{ params: { meetupId: 'm1' } }, { params: { meetupId: 'm2' } }],
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        id: meetupId,
        title: 'A first meetup',
        address: 'Some address 1, 12345 Some city',
        description: 'The a first meetup',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Rathaus_and_Marienplatz_from_Peterskirche_-_August_2006.jpg/1200px-Rathaus_and_Marienplatz_from_Peterskirche_-_August_2006.jpg',
      },
    },
  };
};

export default meetupDetails;
