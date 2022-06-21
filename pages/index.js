import { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
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
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@mycluster.xq6fs.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  console.log(process.env.DEVELOPMENT_ENV_VARIABLE);
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
    // re-generate the page on the server every 10 secs, meaning there's no need to build it every time data is updated
  };
};

export default HomePage;
